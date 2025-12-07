import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ProyectOutputDTO = {
  id: string;
  title: string;
  description: string;
  section: string; // normaliza según tu enum ProjectSection
  participation: string; // normaliza según ParticipationType
  repositoryUrl: string | null;
  liveDemoUrl: string | null;
  portafolioId: string;
};

@Component({
  selector: 'app-project-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './proyect-card.html',
})
export class ProjectCard {
  @Input({ required: true }) project!: ProyectOutputDTO;

  // Mapeo de color por sección (ajusta claves a tus enums reales)
  sectionColorMap: Record<string, string> = {
    ACADEMIC: 'bg-indigo-100 text-indigo-800',
    WORK: 'bg-green-100 text-green-800',
    DATA: 'bg-yellow-100 text-yellow-800',
    DEFAULT: 'bg-gray-100 text-gray-800',
  };

  participationColorMap: Record<string, string> = {
    FRONTEND: 'bg-slate-100 text-slate-800',
    BACKEND: 'bg-blue-100 text-blue-800',
    DATABASE: 'bg-purple-100 text-purple-800',
    FULLSTACK: 'bg-yellow-100 text-gray-800',
    OTHER: 'bg-gray-100 text-gray-800',
  };

  getSectionClasses(section: string) {
    return this.sectionColorMap[section] ?? 'bg-gray-100 text-gray-800';
  }

  getParticipationClasses(part: string) {
    return this.participationColorMap[part] ?? 'bg-gray-100 text-gray-800';
  }
}
