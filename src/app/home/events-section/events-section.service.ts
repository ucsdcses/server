import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response} from '@angular/http';

@Injectable()
export class EventsSectionService {

  constructor(private http: Http) { }

  getFacebookEvents() : Observable<any> {
    return this.http.get('/api/facebook-events').map(
      (res: Response) => { return res.json(); }
    );
  }

}
