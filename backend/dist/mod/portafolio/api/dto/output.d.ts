import { z } from "zod";
export declare const PortafolioOutputDTO: z.ZodObject<{
    id: z.ZodString;
    ownerId: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    project: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PortafolioOutputDTO = z.infer<typeof PortafolioOutputDTO>;
//# sourceMappingURL=output.d.ts.map