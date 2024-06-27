import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Fly' | 'Cannot Fly' {
    return value ? 'Fly' : 'Cannot Fly';
  }
}
