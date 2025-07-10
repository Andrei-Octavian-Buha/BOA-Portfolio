import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactPerson } from '../../models/contactPerson.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../../service/contact.service';


@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule , HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  model = new ContactPerson ("","","", false); ;
  submitted = false;
  showFirstNameError = false;
  showEmailError = false;
  showTextError = false;

  constructor(private contactService: ContactService) {}  

  onInputBlur(name: NgModel) {
    if (name.invalid) {
      if (name.name === 'firstName') {
        this.showFirstNameError = true;
      } else if (name.name === 'email') {
        this.showEmailError = true; 
      }else if (name.name === 'text') {
        this.showTextError = true; 
      }
    }
  }


    onSubmit(contactPerson: NgForm) {
      if (!contactPerson.valid) {
        console.log("Form is invalid.");
        return;
      }

      this.contactService.sendForm(this.model).subscribe({
        next: (res) => {
          console.log('✅ Email sent successfully!', res);
          this.submitted = true;
          this.resetForm(contactPerson);
        },
        error: (err) => {
          console.error('❌ Error sending email:', err);
        }
      });
    }

    resetForm(form: NgForm) {
      form.reset(); // Resets form controls (valid, touched, dirty)
      // this.model = {    // Clear model data
      //   firstName: '',
      //   email: '',
      //   text: '',
      //   agree: false
      // };
      // this.showFirstNameError = false; // Hide errors
      // this.showEmailError = false;
    }
}
