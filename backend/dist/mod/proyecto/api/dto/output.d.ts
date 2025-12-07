import { z } from "zod";
export declare const ProyectOutputDTO: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    section: z.ZodEnum<{
        readonly ACADEMIC: "ACADEMIC";
        readonly WORK: "WORK";
    }>;
    participation: z.ZodEnum<{
        readonly FRONTEND: "FRONTEND";
        readonly BACKEND: "BACKEND";
        readonly DATABASE: "DATABASE";
        readonly FULLSTACK: "FULLSTACK";
        readonly OTHER: "OTHER";
    }>;
    repositoryUrl: z.ZodNullable<z.ZodString>;
    liveDemoUrl: z.ZodNullable<z.ZodString>;
    portafolioId: z.ZodString;
}, z.core.$strip>;
export type ProyectOutputDTO = z.infer<typeof ProyectOutputDTO>;
//# sourceMappingURL=output.d.ts.map