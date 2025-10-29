import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardServis } from '../card.servis';
import { Card } from '../card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  /**
   * 
   */
  card?: Card;
  /**
   * 
   */
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl('')
  })
  /**
   * 
   */
  constructor(private route: ActivatedRoute, private cardServis: CardServis) {
    const cardId: string = this.route.snapshot.params['id'];
    this.cardServis.getCardById(+cardId).then((card) => {
      this.card = card
    });
  }
  send() {
    this.cardServis.sendData(this.form.value.name, this.form.value.comment)
  }
}
