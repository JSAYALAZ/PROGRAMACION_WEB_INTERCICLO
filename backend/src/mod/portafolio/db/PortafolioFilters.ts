
import { Prisma } from "@/src/generated/prisma/client";
import { PortafolioFiltersDTO } from "../api/dto/input";

export function generatePortafolioFiltres(q: PortafolioFiltersDTO) {
  const filters: Prisma.PortfolioWhereInput[] = [];
  if (q.ownerId !== undefined) {
    filters.push({ ownerId: q.ownerId });
  }
  if (q.title !== undefined) {
    filters.push({ title: { contains: q.title } });
  }
  const where: Prisma.PortfolioWhereInput = {
    AND: filters,
  };
  return { filters: { where } };
}

export type PortfolioFilters = {
  where: Prisma.PortfolioWhereInput;
  orderBy?: Prisma.PortfolioOrderByWithRelationInput;
};
