"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.mapPrismaError = mapPrismaError;
const client_1 = require("../generated/prisma/client");
const AppError_1 = require("./AppError");
exports.db = new client_1.PrismaClient({
// log:["query"]
});
/**db
 * Intenta convertir un error de Prisma en un AppError semántico.
 * Devuelve `null` si no reconoce/mapea el error.
 */
function mapPrismaError(err) {
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2002": // UNIQUE conflict
                return AppError_1.AppError.conflict("Ya existe un registro con esos datos");
            case "P2003": // FK inválida
                return AppError_1.AppError.dependencyInvalid("Relación inválida (FK) en la creación");
            case "P2000": // valor demasiado largo
            case "P2011": // null en campo no-null
            case "P2012": // falta valor requerido
            case "P2004": // check constraint failed
                return AppError_1.AppError.createFailed("Datos inválidos para crear el registro", err.meta);
            default:
                return null; // dejar subir, terminará en 500
        }
    }
    // Opcional: errores de validación del cliente Prisma (schema mismatch)
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        return AppError_1.AppError.createFailed("Datos inválidos para la operación");
    }
    return null;
}
//# sourceMappingURL=prisma.js.map