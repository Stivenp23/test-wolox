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
  getAllPokemon$ = this.actions$.pipe(
    ofType(PokemonActions.GET_ALL_POKEMON),
    switchMap<any, any>(data =>
      this.listPokemonService.getAllPokemon(data.payload).pipe(
        switchMap(res => of(PokemonActions.getAllPokemonSuccess(res))),
        catchError(err => {
          return of()
        })
      )
    )
  )

  @Effect()
  getPokemonId$ = this.actions$.pipe(
    ofType(PokemonActions.GET_POKEMON_ID),
    switchMap<any, any>(data =>
      this.listPokemonService.getPokemon(data.payload).pipe(
        switchMap(res => of(PokemonActions.getPokemonIdSuccess(res))),
        catchError(err => {
          return of()
        })
      )
    )
  )

}
