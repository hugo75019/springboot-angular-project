import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-by-id',
  templateUrl: './album-by-id.component.html',
  styleUrls: ['./album-by-id.component.css']
})
export class AlbumByIdComponent implements OnInit {
  id:string = '';
  album : Album  | undefined;

  constructor(private route: ActivatedRoute, private albumService : AlbumService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.album = new Album();
    this.albumService.getAlbumById(this.id).subscribe(data=> {
      this.album=data;
    })
  }

}
