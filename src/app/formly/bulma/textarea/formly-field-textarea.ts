import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-textarea',
  templateUrl: './formly-field-textarea.html'
})
export class FormlyFieldTextAreaComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1
    }
  };
}
