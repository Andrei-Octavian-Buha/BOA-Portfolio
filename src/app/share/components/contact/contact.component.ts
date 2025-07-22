import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
