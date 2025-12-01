import { Response } from "express";
import { AppError } from "./AppError";

export type ApiSuccess<T = unknown> = {
  success: true;
  message: string;
  data: T;
};

export type BinaryFileInput = Blob | ArrayBuffer | Uint8Array;

export class ApiResponse {
  static success<T = unknown>(
    res: Response,
    message: string,
    data: T | null = null,
    status: number = 200
  ): Response {
    const payload: ApiSuccess<T | null> = {
      success: true,
      message,
      data,
    };
    return res.status(status).json(payload);
  }

  static error(res: Response, error: unknown, fallbackMsg?: string): Response {
    if (error instanceof AppError) {
      return error.toResponse(res);
    }

    return AppError.internal(
      fallbackMsg ?? "Error interno en el servidor"
    ).toResponse(res);
  }
}
