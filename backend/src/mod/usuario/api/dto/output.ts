import { Role } from "src/generated/prisma/enums";
import { z } from "zod";

export const UserOutputDTO = z.object({
  id: z.string(),
  firebaseUid: z.string(),
  username: z.string(),
  foto_perfil: z.string().nullable(),
  email: z.string(),
  rol: z.enum(Role),
});

export type UserOutputDTO = z.infer<typeof UserOutputDTO>;
