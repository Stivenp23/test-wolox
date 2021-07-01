import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {AppState} from '../../reducers'
import * as AOS from 'aos'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(
    public store: Store<AppState>,
    public router: Router,
  ) {
  }

  ngOnInit() {
    let scrollRef = 0
    window.addEventListener('scroll', function () {
      scrollRef <= 10 ? scrollRef++ : AOS.refresh()
    })
    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        AOS.init({
          duration: 900,
          delay: 200,
          once: true
        })
      }
    };

  }
}
