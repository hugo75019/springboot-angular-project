import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  album: Album = new Album();
  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAlbum(){
    this.albumService.createAlbum(this.album).subscribe(data =>{
      console.log(data);
      this.goToAlbumList();
  },
    error => console.log(error));
}

  goToAlbumList(){
    this.router.navigate(['/albums']);
  }

  onSubmit(){
    console.log(this.album);
    this.saveAlbum();
  }

}
