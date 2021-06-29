import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormDynamicBase} from '@data/model/home/form';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-app-form-dynamic',
  templateUrl: './app-form-dynamic.component.html',
  styleUrls: ['./app-form-dynamic.component.scss'],
})
export class AppFormDynamicComponent implements OnInit {
  @Input() control: FormDynamicBase<string>[] | null = [];
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>(); 
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = this.setFormGroup(this.control);
    console.log('control', this.form);
  }

  setFormGroup(form: FormDynamicBase<string>[]) {
    let group: any = {};
    form.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }
}
