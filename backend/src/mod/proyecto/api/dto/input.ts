import { ParticipationType, ProjectSection } from "../../../../generated/prisma/enums";
import z from "zod";

export const ProyectCreateDTO = z.object({
  description: z.string(),
  liveDemoUrl: z.string().nullable(),
  userId: z.string(),
  repositoryUrl: z.string().nullable(),
  participation: z.enum(ParticipationType),
  section: z.enum(ProjectSection),
  title: z.string(),
});
export type ProyectCreateDTO = z.infer<typeof ProyectCreateDTO>;
export const ProyectFiltersDTO = z.object({
  portfolioId: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
  title: z
    .string()
    .trim()
    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
  section: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : (v as ProjectSection);
    })
    .optional(),
  participation: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : (v as ParticipationType);
    })
    .optional(),
  ownerId: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
});

export type ProyectFiltersDTO = z.infer<typeof ProyectFiltersDTO>;

export function parseCateogyrFilter(sp: URLSearchParams): ProyectFiltersDTO {
  return ProyectFiltersDTO.parse(Object.fromEntries(sp));
}
