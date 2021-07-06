export class PokemonActions {
  static GET_ALL_POKEMON = '[Config] GET_ALL_POKEMON'
  static GET_ALL_POKEMON_SUCCESS = '[Config] GET_ALL_POKEMON_SUCCESS'
  static GET_POKEMON_ID = '[Config] GET_POKEMON_ID'
  static GET_POKEMON_ID_SUCCESS = '[Config] GET_POKEMON_ID_SUCCESS'
  static GET_POKEMON_CLEAN = '[Config] GET_POKEMON_CLEAN'
  static GET_POKEMON_CLEAN_POSITION = '[Config] GET_POKEMON_CLEAN_POSITION'
  static getAllPokemon = payload => ({
    type: PokemonActions.GET_ALL_POKEMON,
    payload
  })
  static getAllPokemonSuccess = payload => ({
    type: PokemonActions.GET_ALL_POKEMON_SUCCESS,
    payload
  })
  static getPokemonId = payload => ({
    type: PokemonActions.GET_POKEMON_ID,
    payload
  })
  static getPokemonIdSuccess = payload => ({
    type: PokemonActions.GET_POKEMON_ID_SUCCESS,
    payload
  })
  static getPokemonClean = () => ({
    type: PokemonActions.GET_POKEMON_CLEAN
  })
  static getPokemonCleanPosition = payload => ({
    type: PokemonActions.GET_POKEMON_CLEAN_POSITION,
    payload
  })
}
