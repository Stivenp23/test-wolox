import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {AuthenticationActions} from '../actions'
import {catchError, switchMap, take} from 'rxjs/operators'
import {AuthenticationService} from '../services/authentication.service'
import {of} from 'rxjs'

@Injectable()
export class AuthenticationEffect {
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {
  }

  @Effect()
  getAuthentication$ = this.actions$.pipe(
    ofType(AuthenticationActions.SET_REGISTER),
    take(1),
    switchMap<any, any>(data =>
      this.authenticationService.setRegister(data.payload).pipe(
        switchMap(res => of(AuthenticationActions.getRegisterSuccess(res))),
        catchError(err => {
          return of()
        })
      )
    )
  )

}
