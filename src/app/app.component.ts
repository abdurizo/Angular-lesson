import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardComponent , Card} from './card/card.component';
import { SharedModule } from './shared/shared.module';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, SharedModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cards: Card[] = [
    {
      id: 1,
      title: 'YSNW',
      text: 'Read It and Weep',
      photo: '../assets/image/ASUS_Logo.png',
    },
    {
      id: 2,
      title: 'PHNY',
      text: 'Happiness',
      photo: '../assets/image/Apple-logo.png',
    },
    {
      id: 3,
      title: 'HESC',
      text: '12:08 East of Bucharest (A fost sau n-a fost?)',
      photo: '../assets/image/iron-small-2.png',
    },
    {
      id: 4,
      title: 'LIPD',
      text: 'Drums Along the Mohawk',
      photo: '../assets/image/galaxy-s21.png',
    },
    {
      id: 5,
      title: 'YLEV',
      text: 'Old Boy',
      photo: '../assets/image/shivaki.png',
    },
    {
      id: 6,
      title: 'VLSV',
      text: 'Evocateur: The Morton Downey Jr. Movie',
      photo: '../assets/image/Samsung_Logo.png',
    },
    {
      id: 7,
      title: 'FMMX',
      text: 'Penthouse',
      photo: '../assets/image/Rectangle 6.jpg',
    },
    {
      id: 8,
      title: 'SSVN',
      text: 'Night Moves',
      photo: '../assets/image/halal.png',
    },
    {
      id: 9,
      title: 'EGBJ',
      text: 'King Is Alive, The',
      photo: '../assets/image/hairbrush.png',
    },
    {
      id: 10,
      title: 'MDSJ',
      text: 'Van, The',
      photo: '../assets/image/photo_camera.png',
    },
  ];
}
