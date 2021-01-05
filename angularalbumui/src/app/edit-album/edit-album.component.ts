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
    this.id = this.route.snapshot.params['id'];
    this.albumService.getAlbumById(this.id).subscribe(data =>{
      this.album = data;
    }, error => console.log(error));    
  }

  onSubmit(){
    this.albumService.editAlbum(this.id, this.album).subscribe(data =>{
      this.goToAlbumList();
    }, error => console.log(error));
  }

  
  goToAlbumList(){
    this.router.navigate(['/albums']);
  }
}
