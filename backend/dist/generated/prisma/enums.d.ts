export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly PROGRAMMER: "PROGRAMMER";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProjectSection: {
    readonly ACADEMIC: "ACADEMIC";
    readonly WORK: "WORK";
};
export type ProjectSection = (typeof ProjectSection)[keyof typeof ProjectSection];
export declare const ParticipationType: {
    readonly FRONTEND: "FRONTEND";
    readonly BACKEND: "BACKEND";
    readonly DATABASE: "DATABASE";
    readonly FULLSTACK: "FULLSTACK";
    readonly OTHER: "OTHER";
};
export type ParticipationType = (typeof ParticipationType)[keyof typeof ParticipationType];
export declare const Weekday: {
    readonly MON: "MON";
    readonly TUE: "TUE";
    readonly WED: "WED";
    readonly THU: "THU";
    readonly FRI: "FRI";
    readonly SAT: "SAT";
    readonly SUN: "SUN";
};
export type Weekday = (typeof Weekday)[keyof typeof Weekday];
//# sourceMappingURL=enums.d.ts.map