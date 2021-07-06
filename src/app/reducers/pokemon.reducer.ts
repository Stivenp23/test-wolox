import {PokemonActions} from '../actions'
import {combineReducers} from '@ngrx/store'

function listPokemon(state = [], {type, payload}) {
  switch (type) {
    case PokemonActions.GET_ALL_POKEMON_SUCCESS:
      return payload.results
    default:
      return state
  }
}

function pokemonSelected(state = [], {type, payload}) {
  switch (type) {
    case PokemonActions.GET_POKEMON_ID_SUCCESS:
      state.push({...payload})
      return state
    case PokemonActions.GET_POKEMON_CLEAN:
      return []
    case PokemonActions.GET_POKEMON_CLEAN_POSITION:
      state.splice(payload, 1)
      return state
    default:
      return state
  }
}

export const pokemon = combineReducers({
  listPokemon,
  pokemonSelected,
})

