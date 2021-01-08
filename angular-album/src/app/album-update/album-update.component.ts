import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Album } from '../albums/album';
import { AlbumUpdateService } from './album-update.service';

@Component({
  selector: 'app-album-update',
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.css']
})
export class AlbumUpdateComponent implements OnInit {

  id:string | undefined;
  album!: Album;

  constructor(private route: ActivatedRoute, private albumUpdateService: AlbumUpdateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.album = new Album("","","","");
    this.albumUpdateService.getAlbumById(this.id).subscribe(data=>{
      this.album=data;
    })

    public modifyAlbum(albumId:Album){
      return this.albumUpdateService.modifyAlbum(this.id, this.album).subscribe(data=>console.log(data));
    }

  }

