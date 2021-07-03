import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {AppState} from '../../reducers'
import {PokemonActions} from '../../actions'
import {ListPokemonService} from '../../services/list-pokemon.service'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-list',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  logo = '../assets/img/logo-header.svg'
  namePokemon = ''
  dataTemp = []
  countPagination = 20
  constructor(
    public store: Store<AppState>,
    public router: Router,
    public listPokemonService: ListPokemonService
  ) {
  }

  ngOnInit() {
    this.store.dispatch(PokemonActions.getAllPokemon())
  }

  search() {
    if (this.namePokemon === '') {
      this.dataTemp = []
    } else {
      this.listPokemonService.allPokemon$.pipe(
        map(data => {
          this.dataTemp = data.filter(poke => {
            if (poke?.name.includes(this.namePokemon)) {
              return  {...data, poke}
            }
          })
        })
      ).subscribe()
    }
  }
}
