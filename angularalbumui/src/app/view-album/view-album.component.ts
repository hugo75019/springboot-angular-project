import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute, Router} from '@angular/router'
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css']
})
export class ViewAlbumComponent implements OnInit {

  id: string = '';
  album!: Album;
  constructor(private route :ActivatedRoute, private albumService : AlbumService, private router: Router) { }

   ngOnInit() {
    this.album = new Album("","","","");

    this.id = this.route.snapshot.params['id'];
    
    this.albumService.getAlbumById(this.id)
      .subscribe(data => {
        console.log(data)
        this.album = data;
      }, error => console.log(error));
  }


}
