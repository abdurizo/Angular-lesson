import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  card!: Card 
}
