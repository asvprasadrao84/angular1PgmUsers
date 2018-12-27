import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }
}
