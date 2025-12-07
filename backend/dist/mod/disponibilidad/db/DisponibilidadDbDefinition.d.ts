import { Disponibilidad } from "../domain/models/Disponibilidad";
export interface DisponibilidadDbDefinition {
    createMany(data: Disponibilidad[]): Promise<void>;
    deleteAllFromProgrammer(programmerId: string): Promise<void>;
}
//# sourceMappingURL=DisponibilidadDbDefinition.d.ts.map