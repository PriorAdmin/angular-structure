import {Component, OnInit, Input} from '@angular/core';
import {FormDynamicBase} from '@data/model/home/form';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-app-control-dynamic',
  templateUrl: './app-control-dynamic.component.html',
  styleUrls: ['./app-control-dynamic.component.scss'],
})
export class AppControlDynamicComponent {
  @Input() control!: FormDynamicBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
}
