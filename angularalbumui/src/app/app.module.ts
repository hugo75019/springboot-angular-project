import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAlbumComponent } from './add-album/add-album.component'
import { FormsModule} from '@angular/forms';
import { EditAlbumComponent } from './edit-album/edit-album.component'

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AddAlbumComponent,
    EditAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
