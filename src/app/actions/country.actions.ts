export class CountryActions {
  static GET_COUNTRY = '[Config] GET_COUNTRY'
  static GET_COUNTRY_SUCCESS = '[Config] GET_COUNTRY_SUCCESS'
  static setCountry = () => ({
    type: CountryActions.GET_COUNTRY
  });
  static setCountrySuccess = payload => ({
    type: CountryActions.GET_COUNTRY_SUCCESS,
    payload
  });
}
