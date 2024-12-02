import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipePipe implements PipeTransform {

  transform(value: number): string {
    //round down on the value
    const fullStars = Math.floor(value);
    //if the value is greater than or equal to 0.5, return 1, else return 0
    const halfStars = value % 1 >= 0.5 ? 1 : 0;
    //subtract the fullStars and halfStars from 5 to get the number of empty stars
    const emptyStars = 5 - fullStars - halfStars;
    //return the number of stars using a star ascii character and a half star ascii character
    return '★'.repeat(fullStars) + (halfStars ? '½' : '') + '☆'.repeat(emptyStars);
  }

}
