import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = {
    projects: 150,
    clients: 80,
    years: 5,
    team: 15
  };

  teamMembers = [
    {
      id: 1,
      name: 'João Silva',
      role: 'CEO & Founder',
      initials: 'JS',
      description: 'Especialista em transformação digital com mais de 10 anos de experiência.'
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'CTO',
      initials: 'MS',
      description: 'Arquiteta de soluções com expertise em cloud e desenvolvimento web.'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      role: 'Tech Lead',
      initials: 'PC',
      description: 'Desenvolvedor full-stack apaixonado por criar soluções escaláveis.'
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      role: 'UX/UI Designer',
      initials: 'AO',
      description: 'Designer focada em criar experiências memoráveis para usuários.'
    }
  ];
}
