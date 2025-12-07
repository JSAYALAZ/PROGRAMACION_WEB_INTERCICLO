import { Response } from "express";
type AppErrorOpts = {
    status?: number;
    code?: string;
    details?: unknown;
    cause?: unknown;
};
export declare class AppError extends Error {
    readonly status: number;
    readonly code: string;
    readonly details?: unknown;
    constructor(message: string, opts?: AppErrorOpts);
    static validation(message?: string, details?: unknown): AppError;
    static unauthorized(message?: string): AppError;
    static forbidden(message?: string): AppError;
    static notFound(message?: string): AppError;
    static hasDependencies(message?: string): AppError;
    static conflict(message?: string): AppError;
    static createFailed(message?: string, details?: unknown): AppError;
    static dependencyInvalid(message?: string): AppError;
    static internal(message?: string): AppError;
    toResponse(res: Response): Response<any, Record<string, any>>;
}
export {};
//# sourceMappingURL=AppError.d.ts.map