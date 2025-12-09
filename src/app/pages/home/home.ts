import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  services = [
    {
      id: 1,
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para seu negócio.'
    },
    // {
    //   id: 2,
    //   icon: '📱',
    //   title: 'Desenvolvimento Mobile',
    //   description: 'Apps nativos e híbridos para iOS e Android com excelente experiência do usuário.'
    // },
    // {
    //   id: 3,
    //   icon: '☁️',
    //   title: 'Cloud Solutions',
    //   description: 'Infraestrutura em nuvem escalável e segura com AWS, Azure e Google Cloud.'
    // },
    // {
    //   id: 4,
    //   icon: '🎨',
    //   title: 'UI/UX Design',
    //   description: 'Design de interfaces intuitivas focadas na experiência do usuário.'
    // },
    {
      id: 5,
      icon: '🔧',
      title: 'Consultoria TI',
      description: 'Orientação estratégica para transformação digital e otimização de processos.'
    },
    // {
    //   id: 6,
    //   icon: '🚀',
    //   title: 'DevOps',
    //   description: 'Automação, CI/CD e práticas DevOps para entregas ágeis e confiáveis.'
    // }
  ];
}
