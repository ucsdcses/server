import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventsSectionService {

  constructor(private http: Http) { }

  getEvents(): Observable<any> {
    return this.http.get('/api/events').map(
      (res: Response) => {
        if (res.status == 200) {
          try {
            return res.json();
          } catch (err) {
            return [];
          }
        } else {
          return [];
        }
      }
    );
  }

}
