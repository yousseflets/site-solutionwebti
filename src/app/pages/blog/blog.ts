import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  selectedCategory = signal('all');

  featuredPost = {
    title: 'O Futuro do Desenvolvimento Web: Tendências para 2025',
    excerpt: 'Descubra as principais tecnologias e práticas que moldarão o desenvolvimento web nos próximos anos. Desde IA até Web3, exploramos o que está por vir.',
    date: '05 Dez 2024',
    author: 'João Silva',
    readTime: '8 min'
  };

  categories = ['Desenvolvimento', 'Cloud', 'Design', 'DevOps', 'Mobile'];

  posts = [
    {
      id: 1,
      title: 'Como escolher a melhor stack para seu projeto',
      excerpt: 'Guia completo para selecionar as tecnologias certas baseado nas necessidades do seu negócio.',
      category: 'Desenvolvimento',
      date: '03 Dez 2024',
      readTime: '6 min'
    },
    // {
    //   id: 2,
    //   title: 'Migração para Cloud: Guia Prático',
    //   excerpt: 'Passo a passo para migrar sua infraestrutura para a nuvem com segurança e eficiência.',
    //   category: 'Cloud',
    //   date: '01 Dez 2024',
    //   readTime: '10 min'
    // },
    // {
    //   id: 3,
    //   title: 'Princípios de UX Design que todo desenvolvedor deve conhecer',
    //   excerpt: 'Aprenda os fundamentos de UX para criar interfaces mais intuitivas e amigáveis.',
    //   category: 'Design',
    //   date: '28 Nov 2024',
    //   readTime: '5 min'
    // },
    // {
    //   id: 4,
    //   title: 'CI/CD: Automatizando deploys com GitHub Actions',
    //   excerpt: 'Tutorial prático sobre como configurar pipelines de CI/CD usando GitHub Actions.',
    //   category: 'DevOps',
    //   date: '25 Nov 2024',
    //   readTime: '12 min'
    // },
    // {
    //   id: 5,
    //   title: 'Flutter vs React Native: Qual escolher?',
    //   excerpt: 'Comparação detalhada entre os dois principais frameworks de desenvolvimento mobile.',
    //   category: 'Mobile',
    //   date: '22 Nov 2024',
    //   readTime: '7 min'
    // },
    // {
    //   id: 6,
    //   title: 'TypeScript: Por que você deveria usar',
    //   excerpt: 'Descubra os benefícios de adicionar tipagem estática ao seu código JavaScript.',
    //   category: 'Desenvolvimento',
    //   date: '20 Nov 2024',
    //   readTime: '5 min'
    // }
  ];

  filteredPosts = computed(() => {
    if (this.selectedCategory() === 'all') {
      return this.posts;
    }
    return this.posts.filter(post => post.category === this.selectedCategory());
  });

  filterByCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
