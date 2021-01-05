import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

albums: Album[] = [];

  constructor(private albumService : AlbumService, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums() {
    this.albumService.getAlbumsList().subscribe(data => {
      this.albums = data;
  });
}

  editAlbum(id : number){
    this.router.navigate(['editalbum', id]);
  }
}