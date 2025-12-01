import z from "zod";

export const ProgrammerProfileCreateDTO = z.object({
  userId: z.string(),
  bio: z.string(),
  specialty: z.string(),
});
export type ProgrammerProfileCreateDTO = z.infer<
  typeof ProgrammerProfileCreateDTO
>;
