import { Component } from '@angular/core';
import { Word } from '../word';
import { WordServis } from '../word.servis';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * 
   */
  filterWords!: Word[]
  /**
   * 
   */
  words!: Word[];
  /**
   * 
   */
  constructor(
    private WordServis: WordServis, private router: Router
  ) {
    this.WordServis.getAllWords().then((words) => {
      this.words = words
      this.filterWords = words;
    });
  }
  /**
   * 
   */
  search(text: string) {
    this.filterWords = this.words.filter((word) =>
      word.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    )
  }
  /**
   * 
   */
  navigateToDetails() {
    this.router.navigate(['details'])
  }
}

