import {BrowserModule} from '@angular/platform-browser'
import {InjectionToken, LOCALE_ID, NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {CommonModule, DatePipe} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
// Components
import {AppComponent} from './app.component'
import {LandingComponent} from './pages/landing/landing.component'
import {LoginComponent} from './pages/login/login.component'
import {FooterComponent} from './components/footer/footer.component'
import {HeaderComponent} from './components/header/header.component'
import {TabsLoginComponent} from './components/tabs-login/tabs-login.component'
import {ThkModuleComponent} from './components/thk-module/thk-module.component'
import {BannerComponent} from './components/banner/banner.component'
import {NetworksWoloxerComponent} from './components/networks-woloxer/networks-woloxer.component'
import {BenefitsComponent} from './components/benefits/benefits.component'
import {MoreInfoComponent} from './components/more-info/more-info.component'
import {TermsComponent} from './pages/terms/terms.component'
import {ListPokemonComponent} from './pages/list-pokemon/list-pokemon.component'
import {ComparePokemonComponent} from './pages/compare-pokemon/compare-pokemon.component';
// Services
import {AppService} from './services/app.service'
import {CountryService} from './services/country.service'
import {AuthenticationService} from './services/authentication.service'
import {ListPokemonService} from './services/list-pokemon.service'
// Redux
import * as reducers from './reducers'
import {EffectsModule} from '@ngrx/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {ActionReducerMap, State, StoreModule} from '@ngrx/store'
import {effects} from './effects'
// Env
import {environment} from '../environments/environment'
// Lib
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgbModalModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap'
import {NgSelectModule} from '@ng-select/ng-select'


export const reducerToken = new InjectionToken<ActionReducerMap<State<reducers.AppState>>>('Registered Reducers')

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    TabsLoginComponent,
    ThkModuleComponent,
    BannerComponent,
    NetworksWoloxerComponent,
    BenefitsComponent,
    MoreInfoComponent,
    TermsComponent,
    ListPokemonComponent,
    ComparePokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    NgbModalModule,
    NgbNavModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'ENV', useValue: environment},
    {provide: reducerToken, useValue: reducers},
    {provide: LOCALE_ID, useValue: 'es'},
    AppService,
    CountryService,
    AuthenticationService,
    ListPokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
