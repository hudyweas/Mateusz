import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css'],
})
export class ContactPanelComponent implements OnInit {
  FormData: any;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      topic: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('', [Validators.required]),
      checked: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit(formData: any) {
    console.log(formData);
  }
}
