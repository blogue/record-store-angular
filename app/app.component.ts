import { Component, EventEmitter } from 'angular2/core';
import {AlbumListComponent} from './album-list.component';
import { Album } from './album.model';


@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>Album list</h1>
      <album-list
        [albumList]="albums"
        (onAlbumSelect)="albumWasSelected($event)">
      </album-list>
    </div>
  `
})

export class AlbumComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Introducing", "Joey joe joe", 4.50, "Country"),
      new Album("This is an album name", "Millard Fillmore", 4.50, "Hip hop"),
      new Album("Another album", "Franklin Pierce", 4.50, "Country")
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
