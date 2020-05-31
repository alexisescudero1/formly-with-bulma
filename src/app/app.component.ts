import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  options: FormlyFormOptions;
  model = {
    email: '',
    password: '',
    firstname: '',
    lastName: '',
    select: ''
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        description: 'I`m a text description telling you to enter a valid email please',
        required: true,
      },
      validators: {
        validation: ['email']
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        required: true
      }
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name'
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name'
      }
    },
    {
      key: 'select',
      type: 'select',
      templateOptions: {
        label: 'Marvel Favorites Heroes',
        options: [
          {
            label: 'Iron Man',
            value: 'iron_man'
          },
          {
            label: 'Captain America',
            value: 'captain_america'
          },
          {
            label: 'Black Widow',
            value: 'black_widow',
            disabled: true
          },
          {
            label: 'Hulk',
            value: 'hulk'
          },
          {
            label: 'Captain Marvel',
            value: 'captain_marvel'
          },
          {
            label: 'Hawk Eye',
            value: 'hawk_eye'
          }
        ]
      },
      validators: {
        validation: ['hawkEyeSucks']
      }
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Write something about you... or not, this is not required',
        placeholder: 'This has 5 rows',
        rows: 5
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
