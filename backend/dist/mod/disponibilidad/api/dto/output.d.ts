import { z } from "zod";
export declare const DisponibilidadOutputDTO: z.ZodObject<{
    day: z.ZodString;
    startMinuts: z.ZodNumber;
    endMinuts: z.ZodNumber;
}, z.core.$strip>;
export type DisponibilidadOutputDTO = z.infer<typeof DisponibilidadOutputDTO>;
//# sourceMappingURL=output.d.ts.map