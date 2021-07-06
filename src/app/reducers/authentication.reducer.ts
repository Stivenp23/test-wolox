import {AuthenticationActions} from '../actions'

export function authentication(state = [], {type, payload}) {
  switch (type) {
    case AuthenticationActions.GET_REGISTER_SUCCESS:
      localStorage.setItem('currentUser', JSON.stringify(payload.token))
      return payload
    default:
      return state
  }
}
