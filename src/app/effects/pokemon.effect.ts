import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {PokemonActions} from '../actions'
import {catchError, switchMap, take} from 'rxjs/operators'
import {ListPokemonService} from '../services/list-pokemon.service'
import {of} from 'rxjs'

@Injectable()
export class PokemonEffect {
  constructor(
    private actions$: Actions,
    private listPokemonService: ListPokemonService
  ) {
  }

  @Effect()
  getCountry$ = this.actions$.pipe(
    ofType(PokemonActions.GET_ALL_POKEMON),
    take(1),
    switchMap<any, any>(() =>
      this.listPokemonService.getAllPokemon().pipe(
        switchMap(res => of(PokemonActions.getAllPokemonSuccess(res))),
        catchError(err => {
          return of()
        })
      )
    )
  )

}
