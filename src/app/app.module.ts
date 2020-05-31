import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyFieldInputComponent } from './formly/bulma/input/formly-field-input';
import { FormlyFieldSelectComponent } from './formly/bulma/select/formly-field-select';
import { FormlyWrapperFormFieldComponent } from './formly/bulma/wrapper/formly-field-wrapper';
import { FormlyFieldTextAreaComponent } from './formly/bulma/textarea/formly-field-textarea';

export const minlengthValidationMessage = (err, field) => {
  return `Should have at least ${field.templateOptions.minLength} characters`;
}

export const maxlengthValidationMessage = (err, field) => {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export const minValidationMessage = (err, field) => {
  return `This value should be more than ${field.templateOptions.min}`;
};

export const maxValidationMessage = (err, field) => {
  return `This value should be less than ${field.templateOptions.max}`;
};

export const EmailValidatorMessage = (err, field) => {
  return `${field.formControl.value} is not a valid email`;
};

export const EmailValidator = (control: FormControl): ValidationErrors => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !control.value || emailRegex.test(control.value) ? null : { email: true };
};

export const SelectCustomValidator = (control: FormControl): ValidationErrors => {
  return !control.value || control.value !== 'hawk_eye' ? null : { hawkEyeSucks: true };
};

@NgModule({
  declarations: [
    AppComponent,
    FormlyFieldInputComponent,
    FormlyWrapperFormFieldComponent,
    FormlyFieldSelectComponent,
    FormlyFieldTextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'input',
          component: FormlyFieldInputComponent,
          wrappers: ['form-field']
        },
        {
          name: 'select',
          component: FormlyFieldSelectComponent,
          wrappers: ['form-field']
        },
        {
          name: 'textarea',
          component: FormlyFieldTextAreaComponent,
          wrappers: ['form-field']
        }
      ],
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormFieldComponent
        }
      ],
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required'
        },
        {
          name: 'minlength',
          message: minlengthValidationMessage
        },
        {
          name: 'maxlength',
          message: maxlengthValidationMessage
        },
        {
          name: 'min',
          message: minValidationMessage
        },
        {
          name: 'max',
          message: maxValidationMessage
        },
        {
          name: 'email',
          message: EmailValidatorMessage
        },
        {
          name: 'hawkEyeSucks',
          message: 'Hawk Eye? Really?'
        }
      ],
      validators: [
        {
          name: 'email',
          validation: EmailValidator
        },
        {
          name: 'hawkEyeSucks',
          validation: SelectCustomValidator
        }
      ],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
