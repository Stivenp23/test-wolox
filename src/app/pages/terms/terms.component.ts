import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  logo = '../assets/img/logo-header.svg'
  formSuccess: boolean

  constructor(
    public store: Store<AppState>,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  success() {
    this.formSuccess = true;
    setTimeout(() => {
      this.formSuccess = false;
    }, 3000);
  }
}
