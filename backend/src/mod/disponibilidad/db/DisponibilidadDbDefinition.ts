import { Disponibilidad } from "../domain/models/Disponibilidad";

export interface DisponibilidadDbDefinition {
  createMany(data: Disponibilidad[]): Promise<void>;
  deleteAllFromProgrammer(programmerId: string): Promise<void>;
  // count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
  //   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

  //   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
  //   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;
}
