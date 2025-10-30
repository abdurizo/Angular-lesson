import { Component } from '@angular/core';
import { Word } from '../word';
import { WordServis } from '../word.servis';


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
    private WordServis: WordServis
  ){
    
  }
  /**
   * 
   */
  search(text: string) {
    this.filterWords = this.words.filter((word) =>
      word.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
}
