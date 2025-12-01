export class Asesoria {
  private requesterId: string;
  private programmerId: string;
  private availabilityId: string;
  private date: Date;
  private durationMin: Number;
  private comment: string;
  private status: string;
  private responseMessage: Date;

  constructor(data: {
    requesterId: string;
    programmerId: string;
    availabilityId: string;
    date: Date;
    durationMin: Number;
    comment: string;
    status: string;
    responseMessage: Date;
  }) {
    this.requesterId = data.requesterId;
    this.programmerId = data.programmerId;
    this.availabilityId = data.availabilityId;
    this.date = data.date;
    this.durationMin = data.durationMin;
    this.comment = data.comment;
    this.status = data.status;
    this.responseMessage = data.responseMessage;
  }

  // Getters
  public getRequesterId(): string {
    return this.requesterId;
  }

  public getProgrammerId(): string {
    return this.programmerId;
  }

  public getAvailabilityId(): string {
    return this.availabilityId;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDurationMin(): Number {
    return this.durationMin;
  }

  public getComment(): string {
    return this.comment;
  }

  public getStatus(): string {
    return this.status;
  }

  public getResponseMessage(): Date {
    return this.responseMessage;
  }
}
