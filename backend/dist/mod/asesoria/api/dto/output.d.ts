import { z } from "zod";
export declare const AsesoriaOutputDTO: z.ZodObject<{
    programmerId: z.ZodString;
    date: z.ZodString;
    hour: z.ZodNumber;
    durationMin: z.ZodNumber;
    comment: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
    responseMessage: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AsesoriaOutputDTO = z.infer<typeof AsesoriaOutputDTO>;
//# sourceMappingURL=output.d.ts.map