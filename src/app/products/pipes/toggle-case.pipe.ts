import { Pipe, type PipeTransform } from '@angular/core';

//jose | toggleCase = 'JOSE'
//JOSE | toggleCase = 'jose'

@Pipe({
  name: 'toggleCase',
  standalone: true,
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
