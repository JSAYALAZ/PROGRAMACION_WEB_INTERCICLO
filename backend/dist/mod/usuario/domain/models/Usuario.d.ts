import { Role } from "src/generated/prisma/enums";
import { RedSocial } from "src/mod/redSocial/domain/models/RedSocial";
import { PerfilProgramador } from "src/mod/programador/domain/models/PerfilProgramador";
export declare class Usuario {
    private id;
    private firebaseUid;
    private username;
    private foto_perfil;
    private email;
    private rol;
    private programmerProfile;
    setUsername(username: string): void;
    setEmail(email: string): void;
    setRol(rol: Role): void;
    private redesSociales;
    constructor(data: {
        id: string | null;
        firebaseUid: string;
        username: string;
        foto_perfil: string | null;
        email: string;
        rol: Role;
    });
    getRole(): Role;
    getId(): string;
    getUsername(): string;
    getFirebaseUid(): string;
    getFotoPerfil(): string | null;
    getEmail(): string;
    getProgrammerProfile(): PerfilProgramador | null;
    setProgrammerProfile(prof: PerfilProgramador): void;
    addRedSocial(red: RedSocial): void;
    getRedSocial(): RedSocial[];
}
//# sourceMappingURL=Usuario.d.ts.map