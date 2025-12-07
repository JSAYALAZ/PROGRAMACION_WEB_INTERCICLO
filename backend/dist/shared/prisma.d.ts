import { Prisma } from "src/generated/prisma/client";
import { AppError } from "./AppError";
export declare const db: import("../generated/prisma/internal/class").PrismaClient<never, Prisma.GlobalOmitConfig | undefined, import("@prisma/client/runtime/library").DefaultArgs>;
/**db
 * Intenta convertir un error de Prisma en un AppError semántico.
 * Devuelve `null` si no reconoce/mapea el error.
 */
export declare function mapPrismaError(err: unknown): AppError | null;
//# sourceMappingURL=prisma.d.ts.map