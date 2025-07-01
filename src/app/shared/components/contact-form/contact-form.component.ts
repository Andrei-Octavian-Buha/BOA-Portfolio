import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactPerson } from '../../models/contactPerson.component';


@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new ContactPerson ("","","", false); ;
  submitted = false;
  showFirstNameError = false;
  showEmailError = false;

  onInputBlur(name: NgModel) {
    if (name.invalid) {
      if (name.name === 'firstName') {
        this.showFirstNameError = true; // Show error for first name
      } else if (name.name === 'email') {
        this.showEmailError = true; // Show error for email
      }
    }
  }


  onSubmit(contactPerson : NgForm) {
    if (this.model.firstName === '') {
          console.log('"First name is required."');
    }else if (this.model.email === '') {
          console.log('"Email is required."');
    }else {
      console.log('Form is valid. Proceeding with submission.');
      // Here you can handle the form submission, e.g., send it to a server
      // For now, we just log the model to the console
      console.log('Submitted Contact Person:', this.model);
          this.model.agree = true; 
      this.submitted = true;
      this.resetForm(contactPerson);
    }

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
