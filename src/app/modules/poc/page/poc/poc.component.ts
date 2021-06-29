import {Component, OnInit} from '@angular/core';
import {FormDynamicBase, DropdownInput, TextInput} from '@data/model/home/form';
import {of} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent implements OnInit {
  control: FormDynamicBase<string>[];
  response = null;
  constructor() {}

  ngOnInit(): void {
    this.control = this.setControlForm();
  }

  onSubmit(event : any) {
    console.log(event);
    this.response = JSON.stringify(event);
  }

  setControlForm() {
    const control: FormDynamicBase<string>[] = [
      new TextInput({
        key: 'firstName',
        label: 'ชื่อ',
        type: 'text',
        required: true,
        order: 1,
      }),

      new TextInput({
        key: 'lastName',
        label: 'นามสกุล',
        type: 'text',
        required: true,
        order: 2,
      }),

      new TextInput({
        key: 'mobile',
        label: 'เบอร์โทรศัพท์',
        type: 'number',
        required: true,
        order: 3,
      }),

      new TextInput({
        key: 'email',
        label: 'อีเมล',
        type: 'text',
        required: false,
        order: 4,
      }),

      new DropdownInput({
        key: 'occupation',
        label: 'อาชีพ',
        type: 'text',
        order: 5,
        options: [
          {key: '1', value: 'พนักงานบริษัท'},
          {key: '2', value: 'โปรแกรมเมอร์'},
          {key: '3', value: 'เจ้าหน้าที่ธนาคาร'},
          {key: '4', value: 'ว่างงาน'},
        ],
      }),
    ];
    return control.sort((a, b) => a.order - b.order);
  }
}
