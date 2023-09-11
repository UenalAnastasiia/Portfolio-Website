import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChildren('inputField') inputFields!: QueryList<any>;

  contactForm: FormGroup;
  nameFieldError: boolean = false;
  emailFieldError: boolean = false;
  messageFieldError: boolean = false;

  activeBtn: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private messageTipp: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  sendMail() {
    this.contactForm.controls['name'].invalid ? this.nameFieldError = true : this.nameFieldError = false;
    this.contactForm.controls['email'].invalid ? this.emailFieldError = true : this.emailFieldError = false;
    this.contactForm.controls['message'].invalid ? this.messageFieldError = true : this.messageFieldError = false;

    if (this.contactForm.valid) {
      this.showSendMessage();
      this.cleanForm();
      this.fetchMessage();
    }
  }


  async fetchMessage() {
    let fd = new FormData();
    fd.append('name', this.contactForm.controls['name'].value);
    fd.append('message', this.contactForm.controls['message'].value);
    fd.append('email', this.contactForm.controls['email'].value);

    await fetch('https://@anastasiia-uenal.developerakademie.net/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      });
    console.log('Email ', this.contactForm.controls['message'].value);
  }


  showSendMessage() {
    this.activeBtn = true;
    this.messageTipp.open('Thank you for your message!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }


  cleanForm() {
    let inputForm = this.inputFields.toArray();
    inputForm.forEach((field) => (field.nativeElement.value = ''));
  }


  changeIconAnimation() {
    if (this.activeBtn) {
      this.activeBtn = false;
    }
  }


  scrollOnTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}