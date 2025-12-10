import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  servicesList = [
    {
      id: 1,
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e aplicações web modernas, responsivas e otimizadas para performance. Utilizamos as tecnologias mais recentes para garantir uma experiência excepcional aos usuários.',
      features: [
        'Sites institucionais e landing pages',
        'E-commerce completo',
        'Sistemas web customizados',
        'Progressive Web Apps (PWA)',
        'APIs e integrações'
      ],
      technologies: ['Angular', 'React', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js']
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Consultoria TI',
      description: 'Orientação estratégica em tecnologia para transformação digital, otimização de processos e melhoria contínua.',
      features: [
        'Análise de processos',
        'Planejamento estratégico',
        'Seleção de tecnologias',
        'Auditoria de sistemas',
        'Capacitação de equipes'
      ],
      technologies: ['Metodologias Ágeis','Scrum']
    },
  ];
}
