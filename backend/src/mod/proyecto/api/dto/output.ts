import { ParticipationType, ProjectSection } from "../../../../generated/prisma/enums";
import { z } from "zod";

export const ProyectOutputDTO = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  section: z.enum(ProjectSection),
  participation: z.enum(ParticipationType),
  repositoryUrl: z.string().nullable(),
  liveDemoUrl: z.string().nullable(),
  portafolioId: z.string(),
});

export type ProyectOutputDTO = z.infer<typeof ProyectOutputDTO>;
