import { randomBytes } from "crypto";
import { Weekday } from "src/generated/prisma/enums";
import { getDayInDate, timeToMinutes } from "src/shared/utils";

export class Asesoria {
  private id: string;

  // Getters
  public getId(): string {
    return this.id;
  }

  private requesterId: string;
  private programmerId: string;
  private date: Date;
  private weekday: Weekday;
  private hour: number;
  private durationMin: number;
  private comment: string | null;
  private status: string;
  private responseMessage: string | null;

  // Getters
  public getHour(): number {
    return this.hour;
  }

  // Setters
  public setHour(hour: number): void {
    this.hour = hour;
  }
  constructor(data: {
    id: string | null;
    requesterId: string;
    programmerId: string;
    durationMin: number;
    date: string;
    comment: string | null;
    status: string;
    responseMessage: string | null;
  }) {
    this.id = data.id ?? randomBytes(12).toString("hex");
    this.requesterId = data.requesterId;
    this.programmerId = data.programmerId;
    this.date = new Date(data.date);
    this.hour = timeToMinutes(data.date) || 12;
    this.weekday = getDayInDate(data.date) || "MON";
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

  public getDate(): Date {
    return this.date;
  }
  public getWeekday(): Weekday {
    return this.weekday;
  }

  public getDurationMin(): number {
    return this.durationMin;
  }

  public getComment(): string | null {
    return this.comment;
  }

  public getStatus(): string {
    return this.status;
  }

  public getResponseMessage(): string | null {
    return this.responseMessage;
  }
}
