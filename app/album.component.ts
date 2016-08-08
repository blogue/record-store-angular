import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
  <div>
    <input *ngIf="album.inCart" type="checkbox" checked (click)="toggleInCart(false)"/>
    <input *ngIf="!album.inCart" type="checkbox" (click)="toggleInCart(true)"/>
    <label>{{album.artist}} | {{album.name}} | $\{{album.price}}</label>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  toggleInCart(setState: boolean){
    this.album.inCart = setState;
  }
}
