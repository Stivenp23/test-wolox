export class PokemonActions {
  static GET_ALL_POKEMON = '[Config] GET_ALL_POKEMON'
  static GET_ALL_POKEMON_SUCCESS = '[Config] GET_ALL_POKEMON_SUCCESS'
  static getAllPokemon = () => ({
    type: PokemonActions.GET_ALL_POKEMON
  })
  static getAllPokemonSuccess = payload => ({
    type: PokemonActions.GET_ALL_POKEMON_SUCCESS,
    payload
  })
}
