// age.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: number): string {
    //Always have a fail value
    return value ? `${value} years old` : 'Unknown age';
  }
}
