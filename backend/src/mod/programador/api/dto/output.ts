import { Role } from "src/generated/prisma/enums";
import { z } from "zod";

export const UserViewDTO = z.object({
  firebaseUid: z.string(),
  email: z.string(),
  displayName: z.string(),
  role: z.enum(Role),
});

export type UserViewDTO = z.infer<typeof UserViewDTO>;

export const UserListItemDTO = UserViewDTO.pick({
  displayName: true,
  email: true,
  firebaseUid: true,
  role: true,
});
export type UserListItemDTO = z.infer<typeof UserListItemDTO>;

export const UserListResponseDTO = z.object({
  items: z.array(UserListItemDTO),
});
export type UserListResponseDTO = z.infer<typeof UserListResponseDTO>;
