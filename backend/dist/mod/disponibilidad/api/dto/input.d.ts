import z from "zod";
export declare const AvailibilityCreateDTO: z.ZodObject<{
    date: z.ZodString;
    durationMin: z.ZodNumber;
    notes: z.ZodString;
    programmerId: z.ZodString;
}, z.core.$strip>;
export type AvailibilityCreateDTO = z.infer<typeof AvailibilityCreateDTO>;
//# sourceMappingURL=input.d.ts.map