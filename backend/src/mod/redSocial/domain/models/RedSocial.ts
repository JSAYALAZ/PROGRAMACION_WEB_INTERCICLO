
export class RedSocial {
  constructor(data: {
    id: string;
    provider: string;
    url: string;
    label: string;
    order: Number;
  }) {
    this.id = data.id;
    this.provider = data.provider;
    this.url = data.url;
    this.label = data.label;
    this.order = data.order;
  }
  private id: string;
  private provider: string;
  private url: string;
  private label: string;
  private order: Number;

  // Getters
  public getId(): string {
    return this.id;
  }

  public getProvider(): string {
    return this.provider;
  }

  public getUrl(): string {
    return this.url;
  }

  public getLabel(): string {
    return this.label;
  }

  public getOrder(): Number {
    return this.order;
  }
}
