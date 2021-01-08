import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  id: number = 0;
  album: Album = new Album(); 
  constructor(private albumService : AlbumService, private route: ActivatedRoute, private router: Router) {
     
   }

  ngOnInit(): void {
    this.album = new Album();
    this.id = this.route.snapshot.params['id'];
    this.albumService.getAlbumById(this.id).subscribe(data =>{
      this.album = data;
    }, error => console.log(error));    
  }
  
  editedAlbum() {
    this.albumService.editAlbum(this.id, this.album)
      .subscribe(data => {
        console.log(data);
        this.album = new Album();
        this.goToList();
      }, error => console.log(error));
  } 
  /*
  editedAlbum(){
    this.albumService.editAlbum(this.id, this.album).subscribe(data=>console.log(data),
    error=>console.log(error));
    this.album = new Album();
    this.goToList();
  }*/
  OnSubmit(){
    this.editedAlbum();
  }

    goToList(){
    this.router.navigate(['/albums']);
  }
}
