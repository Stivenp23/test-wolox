export * from './app.reducer'
export * from './country.reducer'
export * from './authentication.reducer'
export * from './pokemon.reducer'

export interface AppState {
  app: any
  country: any
  authentication: any
  pokemon: any
}
