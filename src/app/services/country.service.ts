import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Store} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  country$: Observable<any> = this.store.select('country')
  constructor(private http: HttpClient, private store: Store<any>) {
  }

  getCountry() {
    return this.http.get(`${environment.endPointCountry}/all`)
  }
}
