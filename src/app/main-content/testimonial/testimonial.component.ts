import { Component , ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
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
      name: 'John Doe',
      job: 'Software engineer',
      feedback: 'This service is amazing! Highly recommend it to everyone.',
      date: '2023-10-01',
      bg: 0,
      card: 1,
    },
    {
      name: 'Jane Smith',
      job: 'Web designer',
      feedback: 'It was a great pleasure to work with Karl. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      date: '2023-10-02',
      bg: 1,
      card: 2
    },
    {
      name: 'Alice Johnson',
      job: 'Product manager',
      feedback: 'I love the quality and attention to detail.',
      date: '2023-10-03',
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
