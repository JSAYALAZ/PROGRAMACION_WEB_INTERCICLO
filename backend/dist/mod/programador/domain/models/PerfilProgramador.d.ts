import { Disponibilidad } from "../../../../mod/disponibilidad/domain/models/Disponibilidad";
export declare class PerfilProgramador {
    private id;
    private userId;
    private name;
    private specialty;
    private bio;
    private avatarUrl;
    private contactLinks;
    private portafolioId;
    setUserId(userId: string): void;
    setName(name: string): void;
    setSpecialty(specialty: string | null): void;
    setBio(bio: string | null): void;
    setAvatarUrl(avatarUrl: string | null): void;
    setContactLinks(contactLinks: string | null): void;
    setPortafolioId(portafolioId: string): void;
    private disponibilidad;
    getDisponibilidad(): Disponibilidad[];
    constructor(data: {
        id: string | null;
        userId: string;
        name: string;
        specialty: string | null;
        bio: string | null;
        avatarUrl: string | null;
        contactLinks: string | null;
        portafolioId: string;
        disponibilidad: Disponibilidad[];
    });
    getId(): string;
    getUserId(): string;
    getName(): string;
    getSpecialty(): string | null;
    getBio(): string | null;
    getAvatarUrl(): string | null;
    getContactLinks(): string | null;
    getPortafolioId(): string;
}
//# sourceMappingURL=PerfilProgramador.d.ts.map