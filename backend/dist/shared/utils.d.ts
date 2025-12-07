import { Weekday } from "../generated/prisma/enums";
export declare const getDayInDate: (dateIso: string) => Weekday | null;
export declare const fechaActual: (d?: Date) => string;
export declare const timeToMinutes: (dateIso: string) => number | null;
export declare const createDateFitlers: (start: string | null, end: string | null) => {
    start: string;
    end: string;
};
//# sourceMappingURL=utils.d.ts.map