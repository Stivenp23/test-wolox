import {Injectable} from '@angular/core';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {
  }

  getApp() {
    return of([]);
  }
}
