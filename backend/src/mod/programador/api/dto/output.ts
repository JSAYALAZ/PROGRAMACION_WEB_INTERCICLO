import { z } from "zod";

export const ProgrammerOutputDTO = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  specialty: z.string().nullable(),
  bio: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  contactLinks: z.string().nullable(),
  portafolioId: z.string(),
  disponibilidad: [],
});

export type ProgrammerOutputDTO = z.infer<typeof ProgrammerOutputDTO>;
