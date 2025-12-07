import z from "zod";
export declare const ProgrammerProfileCreateDTO: z.ZodObject<{
    userId: z.ZodString;
    bio: z.ZodString;
    specialty: z.ZodString;
    disponibilidad: z.ZodArray<z.ZodObject<{
        day: z.ZodEnum<{
            readonly MON: "MON";
            readonly TUE: "TUE";
            readonly WED: "WED";
            readonly THU: "THU";
            readonly FRI: "FRI";
            readonly SAT: "SAT";
            readonly SUN: "SUN";
        }>;
        startMinutes: z.ZodString;
        endMinutes: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProgrammerProfileCreateDTO = z.infer<typeof ProgrammerProfileCreateDTO>;
export declare const ProgrammerProfileUpdateDTO: z.ZodObject<{
    userId: z.ZodString;
    bio: z.ZodString;
    specialty: z.ZodString;
    disponibilidad: z.ZodArray<z.ZodObject<{
        day: z.ZodEnum<{
            readonly MON: "MON";
            readonly TUE: "TUE";
            readonly WED: "WED";
            readonly THU: "THU";
            readonly FRI: "FRI";
            readonly SAT: "SAT";
            readonly SUN: "SUN";
        }>;
        startMinutes: z.ZodString;
        endMinutes: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProgrammerProfileUpdateDTO = z.infer<typeof ProgrammerProfileUpdateDTO>;
//# sourceMappingURL=input.d.ts.map