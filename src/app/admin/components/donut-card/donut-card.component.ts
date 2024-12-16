import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
    <img
      src="/assets/img/{{donut.icon}}.svg"
      [alt]="donut.name"
      class="donut-card-icon"
    >
    <p class="donut-card-name">{{ donut.name }}</p>
    <p class="donut-card-price">{{ donut.price }}</p>  
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        background-color: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
      }
      p {
        font-size: 16px;
        color: #c14583;
      }
      img {
        width: 50px;
        margin-right: 10px;
      }      
    `
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;

}
