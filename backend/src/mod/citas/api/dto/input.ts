
import { Weekday } from "../../../../generated/prisma/enums";
import z from "zod";

export const AsesoriaCreateDTO = z.object({
  date: z.enum(Weekday),
  hour:z.number(),
  durationMin: z.number(),
  commet: z.string(),
  programmerId: z.string(),
  userId: z.string(),
});
export type AsesoriaCreateDTO = z.infer<typeof AsesoriaCreateDTO>;
