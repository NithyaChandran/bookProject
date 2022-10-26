import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book/book.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordDirective } from './password.directive';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PasswordDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
