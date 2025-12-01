import { randomBytes } from "crypto";

export class Disponibilidad {
  private id: string;

  private programmerId: string;
  private date: Date;
  private durationMin: number;
  private notes: string|null;
  private cancelled: boolean;

  constructor(data: {
    id: string|null;
    programmerId: string;
    date: Date;
    durationMin: number;
    notes: string|null;
    cancelled: boolean;
  }) {
    this.id = data.id ?? randomBytes(12).toString("hex");
    this.programmerId = data.programmerId;
    this.date = data.date;
    this.durationMin = data.durationMin;
    this.notes = data.notes;
    this.cancelled = data.cancelled;
  }
  
   public getId(): string {
    return this.id;
  }

  public getProgrammerId(): string {
    return this.programmerId;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDurationMin(): number {
    return this.durationMin;
  }

  public getNotes(): string|null {
    return this.notes;
  }

  public getCancelled(): boolean {
    return this.cancelled;
  }
}
