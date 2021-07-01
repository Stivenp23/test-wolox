import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tabs-login',
  templateUrl: './tabs-login.component.html',
  styleUrls: ['./tabs-login.component.scss'],
})
export class TabsLoginComponent implements OnInit {
  @Output() submitValid: EventEmitter<any> = new EventEmitter<any>();
  active = 1
  formLogin: FormGroup
  formRegister: FormGroup
  labelTerms = 'Suscribirse al Newsletter'
  nameTerms = 'terms'
  labelBtn = 'Ingreso'
  labelBtnRegister = 'Registro'
  labelRecovery = 'Olvide Contraseña'
  msgError = '<img src="/assets/img/icono-error.png"> Required'
  tabs = [
    {
      tabLabel: 'INGRESO',
      form: {
        fieldsLogin: [
          {
            label: 'EMAIL',
            type: 'text',
            name: 'email',
            placeholders: 'ejemplo@email.com'
          },
          {
            label: 'CONTRASEÑA',
            type: 'password',
            name: 'password',
            placeholders: '*********'
          }
        ]
      }
    },
    {
      tabLabel: 'REGISTRO',
      form: {
        fieldsRegister: [
          {
            label: 'NOMBRE',
            type: 'text',
            name: 'nameR',
            placeholders: 'Stiven'
          },
          {
            label: 'APELLIDO',
            type: 'text',
            name: 'lastNameR',
            placeholders: 'Piñeros'
          },
          {
            label: 'EMAIL',
            type: 'text',
            name: 'emailR',
            placeholders: 'ejemplo@email.com'
          },
          {
            label: 'CONTRASEÑA',
            type: 'password',
            name: 'passwordR',
            placeholders: '*********'
          }
        ]
      }
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,150}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: ['', Validators.required],
    });
    this.formRegister = this.fb.group({
      nameR: ['', [Validators.required, Validators.pattern('^[\u00F1A-Za-zñÑÇáéíóúÁÉÍÓÚ\\\\s ]{3,30}$')]],
      lastNameR: ['', [Validators.required, Validators.pattern('^[\u00F1A-Za-zñÑÇáéíóúÁÉÍÓÚ\\\\s ]{3,30}$')]],
      emailR: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,150}$')]],
      passwordR: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(type) {
    switch (type) {
      case 'login':
        if (this.formLogin.valid) {
          this.submitValid.emit();
        } else {
          this.validateAllFormFields(this.formLogin);
        }
        break;
      default:
        if (this.formLogin.valid) {
          this.submitValid.emit();
        } else {
          this.validateAllFormFields(this.formRegister);
        }
        break;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

}
