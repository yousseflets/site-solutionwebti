import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  private router = inject(Router);

  navigateTo(path: string, fragment?: string) {
    const currentPath = this.router.url ? this.router.url.split('?')[0].split('#')[0] : '';
    const doScroll = () => {
      setTimeout(() => {
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) {
            const header = document.querySelector('.header') as HTMLElement | null;
            const headerHeight = header ? header.offsetHeight : 0;
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop - headerHeight - 12; // small gap
            try {
              window.scrollTo({ top: targetPosition, left: 0, behavior: 'smooth' });
            } catch (e) {
              window.scrollTo(0, Math.max(0, targetPosition));
            }
            return;
          }
        }

        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }, 60);
    };

    if (currentPath === path) {
      // already on same route — just scroll
      doScroll();
      return;
    }

    // navigate and always attempt to scroll afterwards; handle navigate() returning false
    this.router.navigate([path]).then((ok) => {
      // if navigation succeeded or not, try to scroll to fragment
      doScroll();
    }).catch(() => {
      // ensure we still attempt to scroll if navigation failed
      doScroll();
    });
  }
}
