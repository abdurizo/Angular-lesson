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
  constructor(
    private WordServis: WordServis,
    private router:Router
  ) {
    this.filterWords = WordServis.getAllWords();
  }
  /**
   * 
   */
  search(text: string) {
    this.filterWords = this.WordServis.getAllWords().filter((word) =>
      word.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
  /**
   * 
   */
  navigateToDetails(){
    this.router.navigate(['details'])
  }
}

