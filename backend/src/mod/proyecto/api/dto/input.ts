import { ParticipationType, ProjectSection } from "src/generated/prisma/enums";
import z from "zod";

export const ProyectCreateDTO = z.object({
  description: z.string(),
  liveDemoUrl: z.string().nullable(),
  portafolioId: z.string(),
  repositoryUrl: z.string().nullable(),
  participation: z.enum(ParticipationType),
  section: z.enum(ProjectSection),
  title: z.string(),
});
export type ProyectCreateDTO = z.infer<typeof ProyectCreateDTO>;
