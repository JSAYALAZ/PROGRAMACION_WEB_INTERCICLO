import { z } from "zod";

export const DisponibilidadOutputDTO = z.object({
  day: z.string(),
  startMinuts: z.number(),
  endMinuts: z.number(),
});

export type DisponibilidadOutputDTO = z.infer<typeof DisponibilidadOutputDTO>;
