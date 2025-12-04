import { Prisma } from "src/generated/prisma/client";
import { AsesoriaFiltersDTO } from "../api/dto/input";

export function generateAsesoriaFilters(q: AsesoriaFiltersDTO) {
  const filters: Prisma.BookingWhereInput[] = [];
  if (q.programmerId !== undefined) {
    filters.push({ programmerId: q.programmerId });
  }
  if (q.requesterId !== undefined) {
    filters.push({ requesterId: q.requesterId });
  }
  if (q.status !== undefined) {
    filters.push({ status: q.status });
  }
  const where: Prisma.BookingWhereInput = {
    AND: filters,
  };
  return { filters: { where } };
}

export type AsesoriaFilters = {
  where: Prisma.BookingWhereInput;
  orderBy?: Prisma.BookingOrderByWithRelationInput;
};
