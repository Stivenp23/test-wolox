import {PokemonActions} from '../actions'

export function pokemon(state = [], {type, payload}) {
  switch (type) {
    case PokemonActions.GET_ALL_POKEMON_SUCCESS:
      return payload.results
    default:
      return state
  }
}
