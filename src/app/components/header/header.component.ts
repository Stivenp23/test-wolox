import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  classMenuBtn;
  classMenuItems;
  classMenuOpen;
  logo = '../assets/img/logo-header.svg';
  items = [
    {
      label: 'Inicio',
      link: '/'
    },
    {
      label: 'Beneficios',
      link: '/'
    }
  ];

  menu() {
    this.classMenuBtn = this.classMenuBtn ? '' : 'open';
    if (this.classMenuItems) {
      this.classMenuItems = '';
      this.classMenuOpen = '';
    } else {
      this.classMenuItems = 'site-nav--open';
      this.classMenuOpen = 'menu-open';
    }
  }
}
