import z from "zod";
export declare const PortafolioCreateDTO: z.ZodObject<{
    programmerProfileId: z.ZodString;
    description: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>;
export type PortafolioCreateDTO = z.infer<typeof PortafolioCreateDTO>;
export declare const PortafolioUpdateDTO: z.ZodObject<{
    description: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>;
export type PortafolioUpdateDTO = z.infer<typeof PortafolioUpdateDTO>;
export declare const PortafolioFiltersDTO: z.ZodObject<{
    ownerId: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    title: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export type PortafolioFiltersDTO = z.infer<typeof PortafolioFiltersDTO>;
export declare function parseCateogyrFilter(sp: URLSearchParams): PortafolioFiltersDTO;
//# sourceMappingURL=input.d.ts.map