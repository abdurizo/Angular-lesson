import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AppComponent,WordComponent,HomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
