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
      icon: '📱',
      title: 'Desenvolvimento Mobile',
      description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android com foco em usabilidade, performance e experiência do usuário.',
      features: [
        'Apps nativos iOS e Android',
        'Apps híbridos multiplataforma',
        'Design responsivo e intuitivo',
        'Integração com APIs',
        'Publicação nas lojas'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Implementamos e gerenciamos infraestruturas em nuvem escaláveis, seguras e econômicas para seu negócio.',
      features: [
        'Migração para nuvem',
        'Arquitetura cloud-native',
        'Serverless computing',
        'Backup e disaster recovery',
        'Otimização de custos'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      id: 4,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Criamos interfaces intuitivas e experiências memoráveis centradas no usuário, aumentando engajamento e conversões.',
      features: [
        'Pesquisa e análise de usuários',
        'Wireframes e protótipos',
        'Design de interfaces',
        'Design system',
        'Testes de usabilidade'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro']
    },
    {
      id: 5,
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
      technologies: ['Metodologias Ágeis', 'DevOps', 'ITIL', 'Scrum', 'Kanban']
    },
    {
      id: 6,
      icon: '🚀',
      title: 'DevOps & CI/CD',
      description: 'Implementamos práticas DevOps e pipelines de integração e entrega contínua para acelerar o desenvolvimento.',
      features: [
        'Automação de deploys',
        'Pipelines CI/CD',
        'Monitoramento e logs',
        'Infrastructure as Code',
        'Testes automatizados'
      ],
      technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
    }
  ];
}
