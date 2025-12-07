import { Weekday } from "src/generated/prisma/enums";
export declare class Disponibilidad {
    private programmerId;
    private day;
    private startMinutes;
    private endMinutes;
    getProgrammerId(): string;
    getDay(): Weekday;
    getStartMinutes(): number;
    getEndMinutes(): number;
    setProgrammerId(programmerId: string): void;
    setDay(day: Weekday): void;
    setStartMinutes(startMinutes: number): void;
    setEndMinutes(endMinutes: number): void;
    constructor(data: {
        programmerId: string;
        day: Weekday;
        startMinutes: number;
        endMinutes: number;
    });
}
//# sourceMappingURL=Disponibilidad.d.ts.map