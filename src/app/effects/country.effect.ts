import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {CountryActions} from '../actions'
import {catchError, switchMap, take} from 'rxjs/operators'
import {CountryService} from '../services/country.service'
import {of} from 'rxjs';

@Injectable()
export class CountryEffect {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {
  }

  @Effect()
  getCountry$ = this.actions$.pipe(
    ofType(CountryActions.GET_COUNTRY),
    take(1),
    switchMap<any, any>(data =>
      this.countryService.getCountry().pipe(
        switchMap(res => of(CountryActions.setCountrySuccess(res))),
        catchError(err => {
          return of()
        })
      )
    )
  );

}
