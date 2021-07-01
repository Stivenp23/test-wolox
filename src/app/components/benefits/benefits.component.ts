import {Component} from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
  items = [
    {
      img: '../assets/img/01-hour.svg',
      label: 'Flexibilidad Horaria'
    },
    {
      img: '../assets/img/02-homeOffice.svg',
      label: 'Home Office'
    },
    {
      img: '../assets/img/03-workshops.svg',
      label: 'Capacitaciones y workshops'
    },
    {
      img: '../assets/img/04_drinkSnacks.svg',
      label: 'Snacks, frutas y bebidas gratis'
    },
    {
      img: '../assets/img/05-laptop.svg',
      label: 'Semana Remota'
    },
    {
      img: '../assets/img/06_brain.svg',
      label: 'Trabajar en ultimas tecnologías'
    }
  ];
}
