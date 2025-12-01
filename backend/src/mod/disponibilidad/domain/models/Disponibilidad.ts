export class Disponibilidad {
  private programmerId: string;
  private date: Date;
  private durationMin: Number;
  private notes: string;
  private cancelled: Boolean;

  constructor(data: {
    programmerId: string;
    date: Date;
    durationMin: Number;
    notes: string;
    cancelled: Boolean;
  }) {
    this.programmerId = data.programmerId;
    this.date = data.date;
    this.durationMin = data.durationMin;
    this.notes = data.notes;
    this.cancelled = data.cancelled;
  }
  // Getters
  public getProgrammerId(): string {
    return this.programmerId;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDurationMin(): Number {
    return this.durationMin;
  }

  public getNotes(): string {
    return this.notes;
  }

  public getCancelled(): Boolean {
    return this.cancelled;
  }
}
