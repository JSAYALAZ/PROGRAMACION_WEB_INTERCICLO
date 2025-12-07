import { randomBytes } from "crypto";
import { ParticipationType, ProjectSection } from "../../../../generated/prisma/enums";

export class Proyecto {
  private id: string;
  private title: string;
  private description: string;
  private section: ProjectSection;
  private participation: ParticipationType;
  private repositoryUrl: string | null;
  private liveDemoUrl: string | null;
  private portafolioId: string;

  constructor(data: {
    id: string|null;
    title: string;
    description: string;
    section: ProjectSection;
    participation: ParticipationType;
    repositoryUrl: string | null;
    liveDemoUrl: string | null;
    portafolioId: string;
  }) {
   this.id = data.id ?? randomBytes(12).toString("hex");
    this.section = data.section;
    this.title = data.title;
    this.description = data.description;
    this.participation = data.participation;
    this.repositoryUrl = data.repositoryUrl;
    this.liveDemoUrl = data.liveDemoUrl;
    this.portafolioId = data.portafolioId;
  }
  public getId(): string {
    return this.id;
  }
  public getPortafolioId(): string {
    return this.portafolioId;
  }
  public getSeccion() {
    return this.section;
  }
  public getTittle() {
    return this.title;
  }
  public getDescription() {
    return this.description;
  }
  public getParticipationType() {
    return this.participation;
  }
  public getUrlRepo() {
    return this.repositoryUrl;
  }
  public getUrldeploy() {
    return this.liveDemoUrl;
  }
}
