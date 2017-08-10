import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {}

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  getUsers(): Observable<any[]> {
    return this.http.get(`${environment.api_url}/users`, {})
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

}
