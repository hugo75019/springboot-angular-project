import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';

const routes: Routes = [
  {path: 'albums', component: AlbumListComponent},
  {path: 'addalbum', component: AddAlbumComponent},
  {path: 'editalbum/:id', component: EditAlbumComponent},
  {path: 'viewalbum/:id', component: ViewAlbumComponent},
  {path: '', redirectTo: 'albums', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
