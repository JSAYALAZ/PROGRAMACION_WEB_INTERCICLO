import { Response } from "express";
export type ApiSuccess<T = unknown> = {
    success: true;
    message: string;
    data: T;
};
export type BinaryFileInput = Blob | ArrayBuffer | Uint8Array;
export declare class ApiResponse {
    static success<T = unknown>(res: Response, message: string, data?: T | null, status?: number): Response;
    static error(res: Response, error: unknown, fallbackMsg?: string): Response;
}
//# sourceMappingURL=ApiResponse.d.ts.map