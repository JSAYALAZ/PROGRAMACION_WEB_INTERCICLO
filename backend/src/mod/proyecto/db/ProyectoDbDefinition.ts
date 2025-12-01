import { Prisma } from "src/generated/prisma/client";
import { Proyecto } from "../domain/models/Proyecto";

export interface ProyectoDbDefinition {
  list(q?: any, tx?: Prisma.TransactionClient): Promise<Proyecto[]>;
  save(data: Proyecto): Promise<string>;
  getById(id: string): Promise<Proyecto>;
}
