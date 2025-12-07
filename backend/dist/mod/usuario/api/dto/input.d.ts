import z from "zod";
export declare const UserCreateDTO: z.ZodObject<{
    firebaseUid: z.ZodString;
    email: z.ZodString;
    displayName: z.ZodString;
    foto_perfil: z.ZodString;
}, z.core.$strip>;
export type UserCreateDTO = z.infer<typeof UserCreateDTO>;
export declare const UserUpdateDTO: z.ZodObject<{
    displayName: z.ZodString;
    role: z.ZodEnum<{
        readonly ADMIN: "ADMIN";
        readonly PROGRAMMER: "PROGRAMMER";
        readonly USER: "USER";
    }>;
}, z.core.$strip>;
export type UserUpdateDTO = z.infer<typeof UserUpdateDTO>;
//# sourceMappingURL=input.d.ts.map