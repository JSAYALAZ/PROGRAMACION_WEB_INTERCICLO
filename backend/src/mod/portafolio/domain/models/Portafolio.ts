import { randomBytes } from "crypto";
import { Proyecto } from "src/mod/proyecto/domain/models/Proyecto";

export class Portafolio {
  private id: string;
  private ownerId: string;
  private title: string;

  // Setters
  private description: string | null;
  public setTitle(title: string): void {
    this.title = title;
  }

  // Setters
  public setDescription(description: string): void {
    this.description = description;
  }
  private projects: Proyecto[] = [];

  constructor(data: {
    id: string | null;
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

  public addProyect(data: Proyecto) {
    this.projects.push(data);
  }
  public getProyects(): Proyecto[] {
    return this.projects;
  }
}
