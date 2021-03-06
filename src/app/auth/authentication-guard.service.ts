import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {environment} from '../../environments/environment'
import {Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class AuthenticationGuardService {
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue() {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    return this.http.post(`${environment.endPointSignUp}/login`, {username, password})
      .pipe(map(data => {
        console.log('entroo')
        localStorage.setItem('currentUser', JSON.stringify(data['token']))
        this.currentUserSubject.next(data['token'])
        return data['token']
      }))
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
