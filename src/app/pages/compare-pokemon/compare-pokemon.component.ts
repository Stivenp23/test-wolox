import {
  Component,
  OnInit,
} from '@angular/core'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {AppState} from '../../reducers'
import {ListPokemonService} from '../../services/list-pokemon.service'

@Component({
  selector: 'app-compare-pokemon',
  templateUrl: './compare-pokemon.component.html',
  styleUrls: ['./compare-pokemon.component.scss'],
})
export class ComparePokemonComponent implements OnInit {
  logo = '../assets/img/logo-header.svg'


  constructor(
    public store: Store<AppState>,
    public router: Router,
    public listPokemonService: ListPokemonService
  ) {
  }

  ngOnInit() {
  }
}
