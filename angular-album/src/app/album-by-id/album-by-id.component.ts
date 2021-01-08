import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '..albums/albums.service';
import { Album } from '../albums/album';

@Component({
  selector: 'app-album-by-id',
  templateUrl: './album-by-id.component.html',
  styleUrls: ['./album-by-id.component.css']
})

export class AlbumByIdComponent implements OnInit {
  id:string | undefined;
  album:Album | undefined;

  constructor(private route:ActivatedRoute, private albumService:AlbumsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.album = new Album("","","","");
    this.albumService.getAlbumById(this.id).subscribe(data=>{
      this.album=data;
    });
  }
 }

