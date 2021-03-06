import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Store} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ListPokemonService {
  allPokemon$: Observable<any> = this.store.select('pokemon', 'listPokemon')
  pokemonSelected$: Observable<any> = this.store.select('pokemon', 'pokemonSelected')
  constructor(private http: HttpClient, private store: Store<any>) {
  }

  getAllPokemon(cant) {
    return this.http.get(`${environment.endPointPokemon}/pokemon?offset=${cant}&limit=${cant}`)
  }
  getPokemon(endPoint) {
    return this.http.get(`${endPoint}`)
  }
}
