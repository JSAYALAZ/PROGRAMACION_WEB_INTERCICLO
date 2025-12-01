import { randomBytes } from "crypto";

export class Portafolio {
  private id: string;
  private ownerId: string;
  private title: string;
  private description: string | null;

  constructor(data: {
    id: string|null;
    ownerId: string;
    title: string;
    description: string | null;
  }) {
    this.id = data.id ?? randomBytes(12).toString("hex");
    this.ownerId = data.ownerId;
    this.title = data.title;
    this.description = data.description;
  }

  public getId(): string {
    return this.id;
  }
  // Getters
  public getOwnerId(): string {
    return this.ownerId;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string | null {
    return this.description;
  }
}
