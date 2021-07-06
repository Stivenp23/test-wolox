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
  arraySelected = []
  isDisabled = false
  pagination = [5, 10, 20, 50, 100]
  btnFlag = false

  constructor(
    public store: Store<AppState>,
    public router: Router,
    public listPokemonService: ListPokemonService
  ) {
  }

  ngOnInit() {
    this.store.dispatch(PokemonActions.getAllPokemon(this.countPagination))
    this.store.dispatch(PokemonActions.getPokemonClean())
  }

  search() {
    if (this.namePokemon === '') {
      this.dataTemp = []
    } else {
      this.listPokemonService.allPokemon$.pipe(
        map(data => {
          this.dataTemp = data.filter(poke => {
            if (poke?.name.includes(this.namePokemon)) {
              return {...data, poke}
            }
          })
        })
      ).subscribe()
    }
  }

  getNewCant() {
    this.store.dispatch(PokemonActions.getAllPokemon(this.countPagination))
  }

  onChange(endPoint: string, isChecked: boolean) {
    if (isChecked) {
      this.arraySelected.push(endPoint)
      this.store.dispatch(PokemonActions.getPokemonId(endPoint))
      if (this.arraySelected?.length >= 1) {
        this.btnFlag = true
      }
      if (this.arraySelected?.length >= 3) {
        this.isDisabled = true
        this.router.navigate(['compare'])
      } else {
        this.isDisabled = false
      }
    } else {
      this.arraySelected.find((res, index) => {
        if (res === endPoint) {
          console.log(index)
          this.arraySelected.splice(index, 1)
          this.store.dispatch(PokemonActions.getPokemonCleanPosition(index))
          if (this.arraySelected?.length === 0) {
            this.btnFlag = false
          }
        }
      })
    }
  }
}
