
import { Weekday } from "@/src/generated/prisma/enums";
import z from "zod";

export const ProgrammerProfileCreateDTO = z.object({
  userId: z.string(),
  bio: z.string(),
  specialty: z.string(),
  disponibilidad: z.array(
    z.object({
      day: z.enum(Weekday),
      startMinutes: z.string(),
      endMinutes: z.string(),
    })
  ),
});
export type ProgrammerProfileCreateDTO = z.infer<
  typeof ProgrammerProfileCreateDTO
>;
export const ProgrammerProfileUpdateDTO = z.object({
  userId:z.string(),
  bio: z.string(),
  specialty: z.string(),
  disponibilidad: z.array(
    z.object({
      day: z.enum(Weekday),
      startMinutes: z.string(),
      endMinutes: z.string(),
    })
  ),
});
export type ProgrammerProfileUpdateDTO = z.infer<
  typeof ProgrammerProfileUpdateDTO
>;
