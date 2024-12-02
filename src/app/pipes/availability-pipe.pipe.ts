import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availabilityPipe'
})
export class AvailabilityPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Available' : 'Not Available';
  }
}
