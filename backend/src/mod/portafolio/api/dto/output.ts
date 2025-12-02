import { z } from "zod";

export const PortafolioOutputDTO = z.object({
  id: z.string(),
  ownerId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
});

export type PortafolioOutputDTO = z.infer<typeof PortafolioOutputDTO>;
