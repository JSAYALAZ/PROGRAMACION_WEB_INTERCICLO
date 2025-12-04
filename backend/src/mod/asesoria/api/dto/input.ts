import { Weekday } from "src/generated/prisma/enums";
import z from "zod";

export const AsesoriaCreateDTO = z.object({
  date: z.enum(Weekday),
  hour: z.number(),
  durationMin: z.number(),
  commet: z.string(),
  programmerId: z.string(),
  userId: z.string(),
});
export type AsesoriaCreateDTO = z.infer<typeof AsesoriaCreateDTO>;

export const AsesoriaFiltersDTO = z.object({
  requesterId: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
  programmerId: z
    .string()
    .trim()
    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
  status: z
    .string()
    .trim()

    .transform((v) => {
      return v == "" ? undefined : v;
    })
    .optional(),
});

export type AsesoriaFiltersDTO = z.infer<typeof AsesoriaFiltersDTO>;

export function parseAsesoriaFilters(sp: URLSearchParams): AsesoriaFiltersDTO {
  return AsesoriaFiltersDTO.parse(Object.fromEntries(sp));
}
