
import { Role } from "../../../../generated/prisma/enums";
import { PerfilProgramador } from "../../../../mod/programador/domain/models/PerfilProgramador";
import { RedSocial } from "../../../../mod/redSocial/domain/models/RedSocial";
import { AppError } from "../../../../shared/AppError";
import { randomBytes } from "crypto";

export class Usuario {
  private id: string;
  private firebaseUid: string;
  private username: string;
  private foto_perfil: string | null;
  private email: string;
  private rol: Role;
  private programmerProfile :PerfilProgramador|null = null

  // Setters
  public setUsername(username: string): void {
    this.username = username;
  }


  public setEmail(email: string): void {
    this.email = email;
  }

  public setRol(rol: Role): void {
    if (this.rol != "USER") {
      throw AppError.unauthorized(
        "No se puede actualizar el rol de este usuario"
      );
    }
    this.rol = rol;
  }
  private redesSociales: RedSocial[] = [];

  constructor(data: {
    id: string | null;
    firebaseUid: string;
    username: string;
    foto_perfil: string | null;
    email: string;
    rol: Role;
  }) {
    this.id = data.id ?? randomBytes(12).toString("hex");
    this.firebaseUid = data.firebaseUid;
    this.username = data.username;
    this.foto_perfil = data.foto_perfil;
    this.email = data.email;
    this.rol = data.rol;
  }

  public getRole() {
    return this.rol;
  }
  public getId() {
    return this.id;
  }
  public getUsername() {
    return this.username;
  }
  public getFirebaseUid() {
    return this.firebaseUid;
  }
  public getFotoPerfil() {
    return this.foto_perfil;
  }

  public getEmail() {
    return this.email;
  }
  public getProgrammerProfile(): PerfilProgramador|null {
    return this.programmerProfile;
  }
  public setProgrammerProfile(prof: PerfilProgramador){
    this.programmerProfile = prof
  }

  public addRedSocial(red: RedSocial) {
    this.redesSociales.push(red);
  }

  public getRedSocial() {
    return this.redesSociales;
  }
}
