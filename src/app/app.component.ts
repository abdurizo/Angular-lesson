import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CardServis } from './card.servis';
import {  ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SharedModule, ReactiveFormsModule],
  providers:[CardServis],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
