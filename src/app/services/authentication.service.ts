import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Store} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  tokenRegister$: Observable<any> = this.store.select('authentication', 'token')

  constructor(private http: HttpClient, private store: Store<any>) {
  }

  setRegister(data) {
    return this.http.post(`${environment.endPointSignUp}/signup`, data)
  }

  login(user) {
    return this.http.post(`${environment.endPointSignUp}/login`, user)
  }
}
