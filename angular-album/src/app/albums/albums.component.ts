import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Album } from './album';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  constructor() { }

  ngOnInit(): void {
  }

}
