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
