import { Prisma } from "src/generated/prisma/client";
import { Proyecto } from "../domain/models/Proyecto";
import { ProjectFilters } from "./ProyectoFilters";

export interface ProyectoDbDefinition {
  list(q?: ProjectFilters, tx?: Prisma.TransactionClient): Promise<Proyecto[]>;
  save(data: Proyecto): Promise<string>;
  getById(id: string): Promise<Proyecto>;
}
