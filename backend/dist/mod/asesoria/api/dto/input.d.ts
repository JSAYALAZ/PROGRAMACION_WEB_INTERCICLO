import z from "zod";
export declare const AsesoriaCreateDTO: z.ZodObject<{
    date: z.ZodString;
    durationMin: z.ZodNumber;
    commet: z.ZodString;
    programmerId: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>;
export type AsesoriaCreateDTO = z.infer<typeof AsesoriaCreateDTO>;
export declare const AsesoriaUpdateDTO: z.ZodObject<{
    status: z.ZodString;
    responseMessage: z.ZodString;
}, z.core.$strip>;
export type AsesoriaUpdateDTO = z.infer<typeof AsesoriaUpdateDTO>;
export declare const AsesoriaFiltersDTO: z.ZodObject<{
    requesterId: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    programmerId: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    status: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AsesoriaFiltersDTO = z.infer<typeof AsesoriaFiltersDTO>;
export declare function parseAsesoriaFilters(sp: URLSearchParams): AsesoriaFiltersDTO;
//# sourceMappingURL=input.d.ts.map