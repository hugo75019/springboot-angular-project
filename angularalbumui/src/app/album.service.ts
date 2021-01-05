import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseURL = "http://localhost:8088/api/v1/albums";
  constructor(private httpClient: HttpClient) { }

  getAlbumsList(): Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.baseURL}`);
  }

  createAlbum(album: Album): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, album);
  }

  getAlbumById(id : number): Observable<Album>{
    return this.httpClient.get<Album>(`${this.baseURL}/$ {id}}`);
  }

  editAlbum(id: number, album : Album): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}}`, album);
  }

}
