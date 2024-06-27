import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
//import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
  selector: 'products-order',
  standalone: true,
  templateUrl: './order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PrimeNgModule,
    ToggleCasePipe,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
    CanFlyPipe,
    SortByPipe,
  ],
})
export class OrderComponent {
  //implements OnInit {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero = 'name';
  public descending: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linerna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy(orderBy: keyof Hero) {
    this.orderBy = orderBy;
    this.descending = !this.descending;
  }

  getColorName(color: Color): string {
    return Color[color];
  }

  // items: MenuItem[] = []; // | undefined;

  // ngOnInit() {
  //   this.items = [
  //     {
  //       label: 'Update',
  //       icon: 'pi pi-refresh',
  //     },
  //     {
  //       label: 'Delete',
  //       icon: 'pi pi-times',
  //     },
  //   ];
  // }
}
