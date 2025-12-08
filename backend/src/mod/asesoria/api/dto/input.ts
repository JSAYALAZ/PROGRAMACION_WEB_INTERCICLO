import z from "zod";

export const AsesoriaCreateDTO = z.object({
  date: z.string(),
  durationMin: z.number(),
  comment: z.string(),
  programmerId: z.string(),
  userId: z.string(),
});
export type AsesoriaCreateDTO = z.infer<typeof AsesoriaCreateDTO>;
export const AsesoriaUpdateDTO = z.object({
  status: z.string(),
  responseMessage: z.string(),
});
export type AsesoriaUpdateDTO = z.infer<typeof AsesoriaUpdateDTO>;

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
  from: z.string().trim().optional(),
  to: z.string().trim().optional(),
});

export type AsesoriaFiltersDTO = z.infer<typeof AsesoriaFiltersDTO>;

export function parseAsesoriaFilters(sp: URLSearchParams): AsesoriaFiltersDTO {
  return AsesoriaFiltersDTO.parse(Object.fromEntries(sp));
}
