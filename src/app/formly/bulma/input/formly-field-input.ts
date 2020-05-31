import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-input',
  templateUrl: './formly-field-input.html'
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}
