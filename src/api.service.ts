import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=news_desk:("Technology""Science")';
  ApiKey = 'api-key=XYpkAwUHjuuhs0NzAGNsguSVwlLCrS0R'

  
  constructor(private http: HttpClient) { }

  getArticles (params = 0) {
    return this.http.get(`${this.baseUrl}&${this.ApiKey}&page=${params}`);
  }

}