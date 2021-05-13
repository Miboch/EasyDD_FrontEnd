import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class BaseService<TServiceType> {
  url: string;

  constructor(endpoint: string, protected http: HttpClient) {
    this.url = environment.baseApiRoute + endpoint;
  }

  all(): Observable<TServiceType[]> {
    return this.http.get<TServiceType[]>(this.url);
  }

  single(id: number): Observable<TServiceType> {
    return this.http.get<TServiceType>(`${this.url}/${id}`)
  }

}
