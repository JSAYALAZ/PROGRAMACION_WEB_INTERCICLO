
import { Prisma } from "@/src/generated/prisma/client";
import { ProyectFiltersDTO } from "../api/dto/input";

export function generateProyectoFiltres(q: ProyectFiltersDTO) {
  const filters: Prisma.ProjectWhereInput[] = [];
  if (q.ownerId !== undefined) {
    filters.push({
      portfolio: {
        ownerId: q.ownerId,
      },
    });
  }
  if (q.participation !== undefined) {
    filters.push({ participation: q.participation });
  }
  if (q.portfolioId !== undefined) {
    filters.push({ portfolioId: q.portfolioId });
  }
  if (q.section !== undefined) {
    filters.push({ section: q.section });
  }
  if (q.title !== undefined) {
    filters.push({ title: { contains: q.title } });
  }
  const where: Prisma.ProjectWhereInput = {
    AND: filters,
  };
  return { filters: { where } };
}

export type ProjectFilters = {
  where: Prisma.ProjectWhereInput;
  orderBy?: Prisma.ProjectOrderByWithRelationInput;
};
