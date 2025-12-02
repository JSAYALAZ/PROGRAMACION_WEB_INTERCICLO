
import { Prisma, PrismaClient } from "src/generated/prisma/client";
import { AppError } from "./AppError";


export const db = new PrismaClient({
  // log:["query"]
});
/**db
 * Intenta convertir un error de Prisma en un AppError semántico.
 * Devuelve `null` si no reconoce/mapea el error.
 */

export function mapPrismaError(err: unknown): AppError | null {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": // UNIQUE conflict
        return AppError.conflict("Ya existe un registro con esos datos");
      case "P2003": // FK inválida
        return AppError.dependencyInvalid(
          "Relación inválida (FK) en la creación"
        );
      case "P2000": // valor demasiado largo
      case "P2011": // null en campo no-null
      case "P2012": // falta valor requerido
      case "P2004": // check constraint failed
        return AppError.createFailed(
          "Datos inválidos para crear el registro",
          (err as any).meta
        );
      default:
        return null; // dejar subir, terminará en 500
    }
  }

  // Opcional: errores de validación del cliente Prisma (schema mismatch)
  if (err instanceof Prisma.PrismaClientValidationError) {
    return AppError.createFailed("Datos inválidos para la operación");
  }

  return null;
}
