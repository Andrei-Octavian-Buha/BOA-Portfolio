import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactPerson } from '../../models/contactPerson.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  model = new ContactPerson ("","","", false); ;
  submitted = false;
  showFirstNameError = false;
  showEmailError = false;
  showTextError = false;
 showSuccessMessage = false;
  http = inject(HttpClient);

  post = {
    endPoint: 'https://andreibuha.com/sendMail.php', // Replace with your actual endpoint
    body: (playload: any) => JSON.stringify(playload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as 'json', // sau 'text' as const
    },
  }

  constructor() {}  

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


onSubmit(form: NgForm) {
  if (form.submitted && form.valid) {
    this.http.post(this.post.endPoint, this.post.body(this.model), this.post.options)
      .subscribe({
        next: (response) => {
          form.resetForm();
          this.submitted = true;
          this.showFirstNameError = false;
          this.showEmailError = false;
          this.showTextError = false;
          this.showSuccessMessage = true; // Show success message
          this.resetmessage();
          console.log('Form submitted successfully', response); 
        },
        error: (error) => {
          console.error('Error submitting form', error);
        },
        complete: () => {
          console.log('Form submission complete');
        }
      });
  } else if (form.invalid) {
    form.resetForm();
  }
}

  resetmessage() {
    setTimeout(() => {
    this.showSuccessMessage = false; 
    }, 3000); // 
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
