import { ProyectOutputDTO } from "src/mod/proyecto/api/dto/output";
import { z } from "zod";

export const PortafolioOutputDTO = z.object({
  id: z.string(),
  ownerId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  project: z.array(ProyectOutputDTO)
});

export type PortafolioOutputDTO = z.infer<typeof PortafolioOutputDTO>;
