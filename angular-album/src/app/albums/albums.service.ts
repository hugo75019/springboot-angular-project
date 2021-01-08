import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { rootCertificates } from 'tls';

@Injectable({
    providedIn:'root'
})

export class AlbumsService {
constructor(private http: HttpClient) {}

public getAllAlbum(){
    return this.http.get<Album[]>("http://localhost:8088/api/v1/albums");
}

public createAlbum(album: Album){
    return this.http.post<Album>("http://localhost:8088/api/v1/albums",album);
}

public deleteAlbum(albumDeleted: Album){
    return this.http.delete<Album>("http://localhost:8088/api/v1/albums"+albumDeleted)
    .subscribe(data=>{console.log(data);
});
}

public getAlbumById(albumById:string){
    return this.http.get<Album>("http://localhost:8088/api/v1/albums"+albumById);
}

}
