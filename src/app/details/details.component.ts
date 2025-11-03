import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordServis } from '../word.servis';
import { Word } from '../word';
import { FormControl, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',

})
export class DetailsComponent {
  word?: Word;
  /**
   * 
   */
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  })
  /**
   * 
   */
  constructor(
    private route: ActivatedRoute, private wordServis: WordServis) {
    const wordId: string = this.route.snapshot.params['id'];
    this.wordServis.getWordById(+wordId).then((word) => {
      this.word = word
    });
  }
  /**
   * 
   */
  send() {
    // alert(`${this.form.value.name}: ${this.form.value.comment}`)
    this.wordServis.sendData(this.form.value.name, this.form.value.comment)
  }
}
