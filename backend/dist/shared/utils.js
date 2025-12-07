"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDateFitlers = exports.timeToMinutes = exports.fechaActual = exports.getDayInDate = void 0;
const enums_1 = require("src/generated/prisma/enums");
const getDayInDate = (dateIso) => {
    const d = new Date(dateIso);
    if (isNaN(d.getTime()))
        return null;
    switch (d.getDay()) {
        case 0:
            return enums_1.Weekday.SUN;
        case 1:
            return enums_1.Weekday.MON;
        case 2:
            return enums_1.Weekday.TUE;
        case 3:
            return enums_1.Weekday.WED;
        case 4:
            return enums_1.Weekday.THU;
        case 5:
            return enums_1.Weekday.FRI;
        case 6:
            return enums_1.Weekday.SAT;
        default:
            return null;
    }
};
exports.getDayInDate = getDayInDate;
const fechaActual = (d = new Date()) => {
    const pad = (n) => String(n).padStart(2, "0");
    const tz = -d.getTimezoneOffset(); // en minutos
    const sign = tz >= 0 ? "+" : "-";
    const absMin = Math.abs(tz);
    const hh = pad(Math.floor(absMin / 60));
    const mm = pad(absMin % 60);
    const offset = `${sign}${hh}:${mm}`;
    return (d.getFullYear() +
        "-" +
        pad(d.getMonth() + 1) +
        "-" +
        pad(d.getDate() - 1) +
        "T" +
        pad(d.getHours()) +
        ":" +
        pad(d.getMinutes()) +
        ":" +
        pad(d.getSeconds()) +
        offset);
};
exports.fechaActual = fechaActual;
const timeToMinutes = (dateIso) => {
    const time = dateIso.split("T")[1];
    if (!time)
        return null;
    const [hh, mm] = time.split(":").map((n) => parseInt(n, 10));
    if (Number.isNaN(hh) || Number.isNaN(mm))
        return null;
    return (hh || 1) * 60 + (mm || 1);
};
exports.timeToMinutes = timeToMinutes;
const createDateFitlers = (start, end) => {
    const todayLocal = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const parseSafe = (s) => {
        if (!s)
            return null;
        const sClean = String(s ?? '').split('T')[0]; // "2025-12-08"
        // formato esperado YYYY-MM-DD
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(sClean || "");
        if (!match) {
            // Si el string no tiene el formato esperado, devolvemos null (se tratará como "hoy")
            console.warn(`[createDateFitlers] fecha con formato inesperado: "${s}", usando null/hoy.`);
            return null;
        }
        const y = Number(match[1]);
        const m = Number(match[2]);
        const d = Number(match[3]);
        // Crear fecha en zona local a las 00:00
        return new Date(y, m - 1, d);
    };
    // Parsear entradas (si no son válidas retornan null)
    const parsedStart = parseSafe(start);
    const parsedEnd = parseSafe(end);
    // Aplicar reglas:
    // Si end es null => hoy
    let endDate = parsedEnd ?? todayLocal();
    // Si start es null => si end no es null (ya resuelto) => start = end (00:00).
    // Si start es null y end es null => start = hoy (porque end ya sería hoy).
    let startDate = parsedStart ?? todayLocal(endDate);
    // Normalizar horas: start = 00:00:00.000, end = 23:59:59.999 (local)
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    // Si por alguna razón start > end, intercambiamos para devolver un rango válido
    if (startDate.getTime() > endDate.getTime()) {
        const tmp = startDate;
        startDate = endDate;
        endDate = tmp;
    }
    return { start: (0, exports.fechaActual)(startDate), end: (0, exports.fechaActual)(endDate) };
};
exports.createDateFitlers = createDateFitlers;
//# sourceMappingURL=utils.js.map