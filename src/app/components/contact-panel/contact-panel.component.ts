import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MailContactService,
  mailDTO,
} from 'src/app/services/mail-contact.service';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css'],
})
export class ContactPanelComponent {
  public formData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private mailSender: MailContactService
  ) {
    this.formData = this.builder.group({
      topic: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required]),
      checked: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit(formData: any) {
    const data: mailDTO = {
      sender: formData.email,
      subject: formData.topic,
      text: formData.text,

      receiver: 'hudyweas@gmail.com',
    };

    this.mailSender
      .sendEmail(data)
      .subscribe((value: any) => console.log(value));
  }
}
