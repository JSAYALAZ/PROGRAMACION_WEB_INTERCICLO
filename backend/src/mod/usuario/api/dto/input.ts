

import { Role } from "src/generated/prisma/enums";
import z from "zod";

export const UserCreateDTO = z.object({
  firebaseUid: z.string(),
  email: z.string(),
  displayName: z.string(),
  role: z.enum(Role),
});
export type UserCreateDTO = z.infer<typeof UserCreateDTO>;
