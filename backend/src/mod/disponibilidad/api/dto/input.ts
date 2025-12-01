import z from "zod";

export const AvailibilityCreateDTO = z.object({
  date: z.string(),
  durationMin: z.number(),
  notes: z.string(),
  programmerId: z.string(),
});
export type AvailibilityCreateDTO = z.infer<typeof AvailibilityCreateDTO>;
