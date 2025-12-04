import { z } from "zod";

export const AsesoriaOutputDTO = z.object({
  programmerId: z.string(),
  date: z.string(),
  hour: z.number(),
  durationMin: z.number(),
  comment: z.string().nullable(),
  status: z.string(),
  responseMessage: z.string().nullable(),
});

export type AsesoriaOutputDTO = z.infer<typeof AsesoriaOutputDTO>;
