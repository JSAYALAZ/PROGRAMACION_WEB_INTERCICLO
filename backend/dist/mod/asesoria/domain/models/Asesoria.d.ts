import { Weekday } from "src/generated/prisma/enums";
export declare class Asesoria {
    private id;
    private requesterId;
    private programmerId;
    private date;
    private weekday;
    private hour;
    private durationMin;
    private comment;
    private status;
    private responseMessage;
    getId(): string;
    setStatus(status: string): void;
    setResponseMessage(responseMessage: string): void;
    getHour(): number;
    setHour(hour: number): void;
    constructor(data: {
        id: string | null;
        requesterId: string;
        programmerId: string;
        durationMin: number;
        date: string;
        comment: string | null;
        status: string;
        responseMessage: string | null;
    });
    getRequesterId(): string;
    getProgrammerId(): string;
    getDate(): Date;
    getWeekday(): Weekday;
    getDurationMin(): number;
    getComment(): string | null;
    getStatus(): string;
    getResponseMessage(): string | null;
}
//# sourceMappingURL=Asesoria.d.ts.map