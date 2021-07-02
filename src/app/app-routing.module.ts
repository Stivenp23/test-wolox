import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LandingComponent} from './pages/landing/landing.component'
import {LoginComponent} from './pages/login/login.component'
import {TermsComponent} from './pages/terms/terms.component'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'terminos-y-condiciones',
    component: TermsComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
