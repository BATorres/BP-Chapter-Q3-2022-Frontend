import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) { 
    this.url = environment.url;
  }

  getAllComics(): Observable<any> {
    return this._httpClient.get(this.url);
  }

  getComicById(id: string): Observable<any> {
    return this._httpClient.get(`${this.url}/${id}`);
  }

  createComic(data: any): Observable<any> {
    return this._httpClient.post(this.url, {dataComic: data});
  }

  updateComic(data: any): Observable<any> {
    return this._httpClient.put(`${this.url}/${data.id}`, data);
  }
}
