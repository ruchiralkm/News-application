import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopnewsapiService {
  constructor(private _http: HttpClient) {}

  //Top HeadLines

  topHeadlinesNews =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=ce50c08aa3be4a31bd7f450dbc89c986';

  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }
}
