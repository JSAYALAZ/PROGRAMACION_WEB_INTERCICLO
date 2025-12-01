export class Portafolio {
  private ownerId: string;
  private title: string;
  private description: string;

  constructor(data: { ownerId: string; title: string; description: string }) {
    this.ownerId = data.ownerId;
    this.title = data.title;
    this.description = data.description;
  }
  // Getters
  public getOwnerId(): string {
    return this.ownerId;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }
}
