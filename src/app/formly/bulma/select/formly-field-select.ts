import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-select',
  templateUrl: './formly-field-select.html',
  styleUrls: ['./formly-field-select.scss']
})
export class FormlyFieldSelectComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: []
    },
  };
}
