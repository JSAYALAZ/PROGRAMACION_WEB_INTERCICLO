

import { Role } from "src/generated/prisma/enums";
import z from "zod";

export const PortafolioCreateDTO = z.object({
  programmerProfileId:z.string(),
  description:z.string(),
  title:z.string(),
});
export type PortafolioCreateDTO = z.infer<typeof PortafolioCreateDTO>;
export const PortafolioFiltersDTO = z
  .object({
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
  })

  export type PortafolioFiltersDTO = z.infer<typeof PortafolioFiltersDTO>;

export function parseCateogyrFilter(sp: URLSearchParams): PortafolioFiltersDTO {
  return PortafolioFiltersDTO.parse(Object.fromEntries(sp));
}
