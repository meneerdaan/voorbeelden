import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Testdata} from './testdata';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoorbeeldService {

  private readonly httpClient = inject(HttpClient);

  public getAll(): Observable<Testdata[]> {
    return this.httpClient.get<Testdata[]>('/assets/GET.json');
  }

}
