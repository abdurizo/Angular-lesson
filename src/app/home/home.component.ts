import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card';
import { NgFor } from '@angular/common';
import { CardServis } from '../card.servis';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  filterCard: Card[];
  constructor(private CardServis: CardServis, private router: Router) {
    this.filterCard = this.CardServis.getAllCards();
  }

  search(text: string) {
    this.filterCard = this.CardServis.getAllCards().filter((card) =>
      card.title.toUpperCase().includes(text.toUpperCase())
    )
  }
  /**
   * 
   */
  navigateToDetails() {
    this.router.navigate(['details'])
  }
}
