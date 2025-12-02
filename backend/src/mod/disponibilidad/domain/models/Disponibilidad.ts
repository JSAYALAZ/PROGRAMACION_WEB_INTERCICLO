import { Weekday } from "src/generated/prisma/enums";

export class Disponibilidad {
  private programmerId: string;
  private day: Weekday;
  private startMinutes: number;
  private endMinutes: number;

  // Getters
  public getProgrammerId(): string {
    return this.programmerId;
  }

  public getDay(): Weekday {
    return this.day;
  }

  public getStartMinutes(): number {
    return this.startMinutes;
  }

  public getEndMinutes(): number {
    return this.endMinutes;
  }

  // Setters
  public setProgrammerId(programmerId: string): void {
    this.programmerId = programmerId;
  }

  public setDay(day: Weekday): void {
    this.day = day;
  }

  public setStartMinutes(startMinutes: number): void {
    this.startMinutes = startMinutes;
  }

  public setEndMinutes(endMinutes: number): void {
    this.endMinutes = endMinutes;
  }

  constructor(data: {
    programmerId: string;
    day: Weekday;
    startMinutes: number;
    endMinutes: number;
  }) {
    this.programmerId = data.programmerId;
    this.day = data.day;
    this.startMinutes = data.startMinutes;
    this.endMinutes = data.endMinutes;
  }

  
}
