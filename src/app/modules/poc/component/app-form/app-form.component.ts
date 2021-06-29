import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  form: FormGroup;
  response = null;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.response = null;
      return;
    } else {
      this.response = JSON.stringify(this.form.value);
    }
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get mobile(): FormControl {
    return this.form.get('mobile') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
}
