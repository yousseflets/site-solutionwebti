import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  faqItems = [
    {
      id: 1,
      question: 'Qual o prazo médio para desenvolvimento de um projeto?',
      answer: 'O prazo varia de acordo com a complexidade do projeto. Projetos simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Fazemos uma análise detalhada e fornecemos um cronograma preciso.'
    },
    {
      id: 2,
      question: 'Como funciona o processo de orçamento?',
      answer: 'Após receber seu contato, agendamos uma reunião para entender suas necessidades. Com base nisso, elaboramos uma proposta detalhada com escopo, prazos e valores. Não há custo para esta análise inicial.'
    },
    {
      id: 3,
      question: 'Vocês oferecem suporte após a entrega do projeto?',
      answer: 'Sim! Oferecemos suporte técnico e manutenção contínua. Você pode optar por planos mensais de suporte ou contratar suporte sob demanda conforme necessário.'
    },
    {
      id: 4,
      question: 'Trabalham com empresas de outros estados?',
      answer: 'Sim, atendemos clientes em todo o Brasil. Trabalhamos remotamente e temos processos bem estabelecidos para comunicação e gestão de projetos a distância.'
    }
  ];

  onSubmit() {
    this.isSubmitting.set(true);
    
    // Simulação de envio (em produção, fazer chamada HTTP real)
    setTimeout(() => {
      console.log('Form data:', this.formData);
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 2000);
  }
}
