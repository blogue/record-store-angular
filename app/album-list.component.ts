import { Component, EventEmitter } from 'angular2/core';
import {AlbumComponent} from './album.component';
import {Album} from './album.model';
import { NewAlbumComponent } from './new-album.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [FilterPipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <div>
    <select id="selectGenre" (change)="onChangeGenre($event.target.value)" class="filter">
      <option value="allGenres" selected="selected">Show All</option>
      <option *ngFor="#album of albumList" value="{{album.genre}}">{{album.genre}}</option>
    </select>
  </div>
  <div>
    <select (change)="onChangeArtist($event.target.value)" class="filter">
      <option value="allArtists" selected="selected">Show All</option>
      <option *ngFor="#album of albumList" value="{{album.artist}}">{{album.artist}}</option>
    </select>
  </div>
  <album-display *ngFor="#currentAlbum of albumList | filter:filterGenre:filterArtist"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterGenre: string = "allGenres";
  public filterArtist: string = "allArtists";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(parameters): void {
    this.albumList.push(
      new Album(parameters[0], parameters[1], parseInt(parameters[2]), parameters[3]));
    }
  onChangeGenre(filterOption) {
    this.filterGenre = filterOption;
  }
  onChangeArtist(filterOption) {
    this.filterArtist = filterOption;
  }
}
