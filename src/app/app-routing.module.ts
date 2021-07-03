import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LandingComponent} from './pages/landing/landing.component'
import {LoginComponent} from './pages/login/login.component'
import {TermsComponent} from './pages/terms/terms.component'
import {ListPokemonComponent} from './pages/list-pokemon/list-pokemon.component'

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
  },
  {
    path: 'lista-pokemones',
    component: ListPokemonComponent,
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
