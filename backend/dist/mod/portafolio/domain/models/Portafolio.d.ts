import { Proyecto } from "../../../../mod/proyecto/domain/models/Proyecto";
export declare class Portafolio {
    private id;
    private ownerId;
    private title;
    private description;
    setTitle(title: string): void;
    setDescription(description: string): void;
    private projects;
    constructor(data: {
        id: string | null;
        ownerId: string;
        title: string;
        description: string | null;
    });
    getId(): string;
    getOwnerId(): string;
    getTitle(): string;
    getDescription(): string | null;
    addProyect(data: Proyecto): void;
    getProyects(): Proyecto[];
}
//# sourceMappingURL=Portafolio.d.ts.map