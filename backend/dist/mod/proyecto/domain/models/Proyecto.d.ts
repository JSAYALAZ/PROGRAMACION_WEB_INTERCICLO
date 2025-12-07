import { ParticipationType, ProjectSection } from "src/generated/prisma/enums";
export declare class Proyecto {
    private id;
    private title;
    private description;
    private section;
    private participation;
    private repositoryUrl;
    private liveDemoUrl;
    private portafolioId;
    constructor(data: {
        id: string | null;
        title: string;
        description: string;
        section: ProjectSection;
        participation: ParticipationType;
        repositoryUrl: string | null;
        liveDemoUrl: string | null;
        portafolioId: string;
    });
    getId(): string;
    getPortafolioId(): string;
    getSeccion(): ProjectSection;
    getTittle(): string;
    getDescription(): string;
    getParticipationType(): ParticipationType;
    getUrlRepo(): string | null;
    getUrldeploy(): string | null;
}
//# sourceMappingURL=Proyecto.d.ts.map