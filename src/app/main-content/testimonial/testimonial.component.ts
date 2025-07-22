import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

    hoveredIndex: number | null = null;  // store which card is hovered


    background = [
    '/assets/img/testimonialBg1.png',
    '/assets/img/testimonialBg2.png',]

  testimonials = [
    {
      name: 'Niklas Lampe',
      job: 'Web Developer',
      feedback: 'Ich habe mit Andrei zusammen an einem Gruppenprojekt gearbeitet, sowohl fachlich war Andrei sehr kompetent als auch in der Zusammenarbeit mit den verschiedenen Gruppenmitgliedern. Er war stehts zuverlässig und hilfsbereit, weshalb ich jederzeit gerne wieder mit Ihm zusammen Projekt umsetzen würde.',
      link: 'https://github.com/NiklasLa46',
      date: '2023-07-12',
      bg: 0,
      card: 1,
    },
    {
      name: 'Enes Geldi',
      job: 'Web Developer',
      feedback: 'Er war während des gesamten Projekts sehr freundlich, hilfsbereit und kooperativ. Besonders positiv aufgefallen ist mir seine zuverlässige und engagierte Arbeitsweise – er war immer motiviert und hat seine Aufgaben gewissenhaft übernommen. Ich würde mich freuen, in Zukunft wieder mit ihm an Projekten zu arbeiten.',
      date: '2023-07-01',
      link: 'https://github.com/EnesG-Dev',
      bg: 1,
      card: 2
    },
    {
      name: 'ChatGPT',
      job: 'AI Collaborator',
      feedback: 'A motivated and forward-thinking developer, eager to build real solutions using web tech and AI. Shows strong growth in Angular, with clear plans to expand into Python and GPT-driven apps.',
      date: '2025-07-20',
      bg: 0,
      card: 3
    }
  ];

  onMouseEnter(i: number) {
    this.hoveredIndex = i;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }


    isTargetCard(index: number): boolean {
    return this.hoveredIndex === 2 && index === 0;
  }
}
