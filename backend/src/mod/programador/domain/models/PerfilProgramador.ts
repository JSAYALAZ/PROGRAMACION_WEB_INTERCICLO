import { randomBytes } from "crypto";
import { Disponibilidad } from "src/mod/disponibilidad/domain/models/Disponibilidad";

export class PerfilProgramador {
  private id: string;

  private userId: string;
  private name: string;
  private specialty: string|null;
  private bio: string|null;
  private avatarUrl: string|null;
  private contactLinks: string|null;
  private portafolioId: string|null;
  private disponibilidad: Disponibilidad[]

  // Getters
  public getDisponibilidad(): Disponibilidad[] {
    return this.disponibilidad;
  }

  constructor(data: {
    id: string|null;
    userId: string;
    name: string;
    specialty: string|null;
    bio: string|null;
    avatarUrl: string|null;
    contactLinks: string|null;
    portafolioId: string|null;
    disponibilidad: Disponibilidad[]
  }) {
    this.id = data.id ?? randomBytes(12).toString("hex");
    this.userId = data.userId;
    this.name = data.name;
    this.specialty = data.specialty;
    this.bio = data.bio;
    this.avatarUrl = data.avatarUrl;
    this.contactLinks = data.contactLinks;
    this.portafolioId = data.portafolioId;
    this.disponibilidad = data.disponibilidad;
  }
    // Getters
  public getId(): string {
    return this.id;
  }

  // Getters
  public getUserId(): string {
    return this.userId;
  }

  public getName(): string {
    return this.name;
  }

  public getSpecialty(): string|null {
    return this.specialty;
  }

  public getBio(): string|null {
    return this.bio;
  }

  public getAvatarUrl(): string|null {
    return this.avatarUrl;
  }

  public getContactLinks(): string|null {
    return this.contactLinks;
  }

  public getPortafolioId(): string|null {
    return this.portafolioId;
  }
}
