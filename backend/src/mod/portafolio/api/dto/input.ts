import z from "zod";

export const PortafolioCreateDTO = z.object({
  programmerProfileId: z.string(),
  description: z.string(),
  title: z.string(),
});
export type PortafolioCreateDTO = z.infer<typeof PortafolioCreateDTO>;
export const PortafolioUpdateDTO = z.object({
  description: z.string(),
  title: z.string(),
});
export type PortafolioUpdateDTO = z.infer<typeof PortafolioUpdateDTO>;
export const PortafolioFiltersDTO = z.object({
  ownerId: z
    .string()
    .trim()
    .optional()
    .transform((v) => {
      return v == "" ? undefined : v;
    }),
  title: z
    .string()
    .trim()
    .optional()
    .transform((v) => {
      return v == "" ? undefined : v;
    }),
});

export type PortafolioFiltersDTO = z.infer<typeof PortafolioFiltersDTO>;

export function parseCateogyrFilter(sp: URLSearchParams): PortafolioFiltersDTO {
  return PortafolioFiltersDTO.parse(Object.fromEntries(sp));
}
