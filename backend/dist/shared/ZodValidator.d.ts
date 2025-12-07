import { Request } from "express";
import { ZodSchema } from "zod";
export declare function zodValidateJson<T>(req: Request, schema: ZodSchema<T>): Promise<{
    validated: NonNullable<T>;
    json: any;
}>;
//# sourceMappingURL=ZodValidator.d.ts.map