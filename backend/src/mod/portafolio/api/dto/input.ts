

import { Role } from "src/generated/prisma/enums";
import z from "zod";

export const PortafolioCreateDTO = z.object({
  programmerProfileId:z.string(),
  description:z.string(),
  title:z.string(),
});
export type PortafolioCreateDTO = z.infer<typeof PortafolioCreateDTO>;
