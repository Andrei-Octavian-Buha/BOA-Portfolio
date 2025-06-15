import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
