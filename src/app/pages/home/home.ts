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

    {
      id: 2,
      icon: '🔧',
      title: 'Consultoria TI',
      description: 'Orientação estratégica para transformação digital e otimização de processos.'
    },
  ];
}
