import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../albums/album';

@Injectable({
    providedIn: "root"
})

export class AlbumUpdateService {

    constructor(private http:HttpClient){}

    public getAllAlbum(){
        
        return this.http.get<Album[]>("http://localhost:8088/api/v1/albums");
    }

    public getAlbumById(albumById:Album){
        return this.http.get<Album>("http://localhost:8088/api/v1/albums" + albumById);
    }

    public modifyAlbum(id:string, albumModify:Album){
        return this.http.put<Album>("http://localhost:8088/api/v1/albums" + id, albumModify);
    }

}
