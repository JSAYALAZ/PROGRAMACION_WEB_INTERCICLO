import { z } from "zod";
export declare const UserOutputDTO: z.ZodObject<{
    id: z.ZodString;
    firebaseUid: z.ZodString;
    username: z.ZodString;
    foto_perfil: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
    rol: z.ZodEnum<{
        readonly ADMIN: "ADMIN";
        readonly PROGRAMMER: "PROGRAMMER";
        readonly USER: "USER";
    }>;
}, z.core.$strip>;
export type UserOutputDTO = z.infer<typeof UserOutputDTO>;
//# sourceMappingURL=output.d.ts.map