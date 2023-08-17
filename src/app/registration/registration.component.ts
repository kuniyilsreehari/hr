import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private router: Router, private fb: FormBuilder) {}
  from: FormGroup = this.fb.group({
    type: [null],
  });

  check() {
    console.log(this.from.value);
    if (this.from.value.type === '2') {
      this.router.navigate([""]);
    }
    if (this.from.value.type === '1') {
      this.router.navigate(["formone"]);
    }
  }
}
