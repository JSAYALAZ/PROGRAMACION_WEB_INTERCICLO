import { Request } from "express";
import { ZodSchema } from "zod";
import { AppError } from "./AppError";

export async function zodValidateJson<T>(req: Request, schema: ZodSchema<T>) {
  const data = await req.body;
  const clean = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, v == "" ? null : v])
  );
  const result = schema.safeParse(clean);
  if (!result.success || !result.data) {
    throw AppError.validation("Datos no validos");
  }
  return { validated: result.data, json: data };
}
