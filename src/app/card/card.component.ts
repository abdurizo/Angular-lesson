import { Component, Input } from '@angular/core';

export interface Card {
  id: number;
  title: string;
  text: string;
  photo: string;
}

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
