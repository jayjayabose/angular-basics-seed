import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </div>
  `,
  styles: []
})
export class DonutListComponent {
  donuts!: Donut[];

  constructor() {

  }

  ngOnInit() {
    this.donuts = [
      {
        id: '123asd',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'A donut made with chocolate'
      },
      {
        id: '567fgh',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 299,
        description: 'Sticky perfection',
        promo: true
      },
      {
        id: '927boaf',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 150,
        description: 'Chocolate and caramel'
      },
    ]
  }
}
