import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  transform<T>(
    values: T[],
    sortBy?: keyof T | '',
    descending: boolean = false
  ): T[] {
    if (!sortBy || sortBy === '') return values;

    return values.sort((a, b) =>
      descending
        ? a[sortBy] < b[sortBy]
          ? 1
          : -1
        : a[sortBy] > b[sortBy]
        ? 1
        : -1
    );
  }

  //transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
  // switch (sortBy) {
  //   case 'name':
  //     return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   case 'canFly':
  //     return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
  //   case 'color':
  //     return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
  //   default:
  //     return heroes;
  // }
  //}
}
