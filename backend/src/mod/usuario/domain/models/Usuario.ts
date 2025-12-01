import { Role } from "src/generated/prisma/enums";
import { RedSocial } from "src/mod/redSocial/domain/models/RedSocial";
import { randomBytes } from "crypto";

export class Usuario {
  private id: string;
  private firebaseUid: string;
  private username: string;
  private foto_perfil: string | null;
  private email: string;
  private rol: Role;
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

  public addRedSocial(red: RedSocial) {
    this.redesSociales.push(red);
  }

  public getRedSocial() {
    return this.redesSociales;
  }
}
