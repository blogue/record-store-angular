import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredGenreType = args[0];
    var desiredArtistName = args[1];
    var albums = [];
    for(var i=0; i<input.length; i++) {
      if(desiredGenreType === input[i].genre && desiredArtistName === input[i].artist) {
        albums.push(input[i]);
      } else if((desiredGenreType === input[i].genre && desiredArtistName === "allArtists") || (desiredGenreType === "allGenres" && desiredArtistName === input[i].artist))  {
        albums.push(input[i]);
      } else if (desiredGenreType === "allGenres" && desiredArtistName === "allArtists") {
        return input;
      }
    }
    return albums;
  }
}
