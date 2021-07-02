import {CountryActions} from '../actions'

export function country(state = [], {type, payload}) {
  switch (type) {
    case CountryActions.GET_COUNTRY_SUCCESS:
      return payload
    default:
      return state
  }
}
