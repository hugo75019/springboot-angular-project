import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumByIdComponent } from './album-by-id/album-by-id.component';
import { AlbumUpdateComponent } from './album-update/album-update.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  {path:'album-update/:id', component:AlbumUpdateComponent},
  {path:'album', component:AlbumsComponent},
  {path: 'album-by-id/:id', component:AlbumByIdComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AlbumUpdateComponent]