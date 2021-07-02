import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {CountryActions, AuthenticationActions} from 'src/app/actions'
import {CountryService} from '../../services/country.service'

@Component({
  selector: 'app-tabs-login',
  templateUrl: './tabs-login.component.html',
  styleUrls: ['./tabs-login.component.scss'],
})
export class TabsLoginComponent implements OnInit {
  @Output() submitValid: EventEmitter<any> = new EventEmitter<any>()
  active = 1
  formLogin: FormGroup
  formRegister: FormGroup
  nameTerms = 'terms'
  labelBtn = 'Ingreso'
  labelBtnRegister = 'Registro'
  labelRecovery = 'Olvide Contraseña'
  msgError = 'Required'
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
            label: 'PAÍS',
            type: 'select',
            name: 'country',
            placeholders: 'Seleccione un país'
          },
          {
            label: 'EMAIL',
            type: 'text',
            name: 'emailR',
            placeholders: 'ejemplo@email.com'
          },
          {
            label: 'TELÉFONO',
            type: 'number',
            name: 'phone',
            placeholders: '312424697'
          },
          {
            label: 'CONTRASEÑA',
            type: 'password',
            name: 'passwordR',
            placeholders: '*********'
          },
          {
            label: 'REPITA SU CONTRASEÑA',
            type: 'password',
            name: 'passwordRConfirm',
            placeholders: '*********'
          }
        ]
      }
    }
  ]
  passwordIssue = ''

  constructor(private fb: FormBuilder, private store: Store<any>,
              public countryService: CountryService) {
    this.store.dispatch(CountryActions.setCountry())
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,150}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    this.formRegister = this.fb.group({
      nameR: ['', [Validators.required, Validators.pattern('^[\u00F1A-Za-zñÑÇáéíóúÁÉÍÓÚ\\\\s ]{3,30}$')]],
      lastNameR: ['', [Validators.required, Validators.pattern('^[\u00F1A-Za-zñÑÇáéíóúÁÉÍÓÚ\\\\s ]{3,30}$')]],
      emailR: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,150}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?!.*0123|.*1234|.*2345|.*3456|.*4567|.*5678|.*6789)(?=.*[3][0-9])(?!.*(.)\\1{3})\\S{10}')]],
      country: ['', Validators.required],
      passwordR: ['', [Validators.required, Validators.pattern('^[1-9a-zA-Z]{6,50}$')]],
      passwordRConfirm: ['', [Validators.required, Validators.pattern('^[1-9a-zA-Z]{6,50}$')]],
      terms: ['', Validators.required]
    })
  }

  onSubmit(type) {
    this.passwordIssue = ''
    switch (type) {
      case 'login':
        if (this.formLogin.valid) {
          this.submitValid.emit()
        } else {
          this.validateAllFormFields(this.formLogin)
        }
        break
      default:
        if (this.formRegister.valid) {
          if (this.formRegister.value.passwordR === this.formRegister.value.passwordRConfirm) {
            const dataCountry = this.formRegister.value.country?.split('|') || ''
            this.store.dispatch(AuthenticationActions.setRegister({
              name: this.formRegister.value.nameR || '',
              last_name: this.formRegister.value.lastNameR || '',
              country: dataCountry[0] || '',
              province: dataCountry[1] || '',
              mail: this.formRegister.value.emailR || '',
              phone: this.formRegister.value.phone || '',
              password: this.formRegister.value.passwordR || '',
            }))
          } else {
            this.passwordIssue = 'Las contraseñas no son iguales, por favor revisa'
          }

        } else {
          this.validateAllFormFields(this.formRegister)
        }
        break
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field)
      control.markAsTouched({onlySelf: true})
    })
  }

}
