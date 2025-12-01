export class PerfilProgramador {
  private userId: string;
  private name: string;
  private specialty: string;
  private bio: string;
  private avatarUrl: string;
  private contactLinks: string;
  private portafolioId: string;

  constructor(data: {
    userId: string;
    name: string;
    specialty: string;
    bio: string;
    avatarUrl: string;
    contactLinks: string;
    portafolioId: string;
    id: string;
  }) {
    this.userId = data.userId;
    this.name = data.name;
    this.specialty = data.specialty;
    this.bio = data.bio;
    this.avatarUrl = data.avatarUrl;
    this.contactLinks = data.contactLinks;
    this.portafolioId = data.portafolioId;
  }

  // Getters
  public getUserId(): string {
    return this.userId;
  }

  public getName(): string {
    return this.name;
  }

  public getSpecialty(): string {
    return this.specialty;
  }

  public getBio(): string {
    return this.bio;
  }

  public getAvatarUrl(): string {
    return this.avatarUrl;
  }

  public getContactLinks(): string {
    return this.contactLinks;
  }

  public getPortafolioId(): string {
    return this.portafolioId;
  }
}
