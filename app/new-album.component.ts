import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div class="album-form">
    <h3>Album Template</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist>
    <input placeholder="Price" type=number class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre>
    <button (click)="addAlbum(newName, newArtist, newPrice, newGenre)" class="btn-danger btn-lg">Add</button>
  </div>
   `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(albumName: HTMLInputElement, albumArtist: HTMLInputElement, albumPrice: HTMLInputElement, albumGenre: HTMLInputElement) {
    var model: string[] = [albumName.value, albumArtist.value, albumPrice.value, albumGenre.value];
    this.onSubmitNewAlbum.emit(model);
    albumName.value = "";
    albumArtist.value = "";
    albumPrice.value = "";
    albumGenre.value = "";
  }
}
