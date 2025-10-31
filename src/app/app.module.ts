
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';
import { WordServis } from './word.servis';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [AppComponent,WordComponent,HomeComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes) ],
  providers:[WordServis],
  bootstrap: [AppComponent]
})
export class AppModule { }
