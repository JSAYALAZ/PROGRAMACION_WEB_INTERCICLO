import z from "zod";
export declare const AsesoriaCreateDTO: z.ZodObject<{
    date: z.ZodEnum<{
        readonly MON: "MON";
        readonly TUE: "TUE";
        readonly WED: "WED";
        readonly THU: "THU";
        readonly FRI: "FRI";
        readonly SAT: "SAT";
        readonly SUN: "SUN";
    }>;
    hour: z.ZodNumber;
    durationMin: z.ZodNumber;
    commet: z.ZodString;
    programmerId: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>;
export type AsesoriaCreateDTO = z.infer<typeof AsesoriaCreateDTO>;
//# sourceMappingURL=input.d.ts.map