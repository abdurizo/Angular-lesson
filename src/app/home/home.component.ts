import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card';
import { NgFor } from '@angular/common';
import { CardServis } from '../card.servis';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 

  filterCard: Card[];
constructor(private CardServis:CardServis){
  this.filterCard = this.CardServis.cards
}

  search(text: string) {
    this.filterCard = this.CardServis.cards.filter((card) => 
      card.title.toUpperCase().includes(text.toUpperCase())
    )
  }
}
