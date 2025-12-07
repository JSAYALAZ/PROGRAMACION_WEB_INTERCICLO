import { z } from "zod";
export declare const ProgrammerOutputDTO: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    name: z.ZodString;
    specialty: z.ZodNullable<z.ZodString>;
    bio: z.ZodNullable<z.ZodString>;
    avatarUrl: z.ZodNullable<z.ZodString>;
    contactLinks: z.ZodNullable<z.ZodString>;
    portafolioId: z.ZodString;
    disponibilidad: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        startMinuts: z.ZodNumber;
        endMinuts: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProgrammerOutputDTO = z.infer<typeof ProgrammerOutputDTO>;
//# sourceMappingURL=output.d.ts.map