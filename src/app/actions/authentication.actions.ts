export class AuthenticationActions {
  static SET_REGISTER = '[Config] SET_REGISTER'
  static GET_REGISTER_SUCCESS = '[Config] GET_REGISTER_SUCCESS'
  static setRegister = payload => ({
    type: AuthenticationActions.SET_REGISTER,
    payload
  })
  static getRegisterSuccess = payload => ({
    type: AuthenticationActions.GET_REGISTER_SUCCESS,
    payload
  })
}
