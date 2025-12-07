import z from "zod";
export declare const ProyectCreateDTO: z.ZodObject<{
    description: z.ZodString;
    liveDemoUrl: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    repositoryUrl: z.ZodNullable<z.ZodString>;
    participation: z.ZodEnum<{
        readonly FRONTEND: "FRONTEND";
        readonly BACKEND: "BACKEND";
        readonly DATABASE: "DATABASE";
        readonly FULLSTACK: "FULLSTACK";
        readonly OTHER: "OTHER";
    }>;
    section: z.ZodEnum<{
        readonly ACADEMIC: "ACADEMIC";
        readonly WORK: "WORK";
    }>;
    title: z.ZodString;
}, z.core.$strip>;
export type ProyectCreateDTO = z.infer<typeof ProyectCreateDTO>;
export declare const ProyectFiltersDTO: z.ZodObject<{
    portfolioId: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    title: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    section: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"ACADEMIC" | "WORK" | undefined, string>>>;
    participation: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"FRONTEND" | "BACKEND" | "DATABASE" | "FULLSTACK" | "OTHER" | undefined, string>>>;
    ownerId: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
}, z.core.$strip>;
export type ProyectFiltersDTO = z.infer<typeof ProyectFiltersDTO>;
export declare function parseCateogyrFilter(sp: URLSearchParams): ProyectFiltersDTO;
//# sourceMappingURL=input.d.ts.map