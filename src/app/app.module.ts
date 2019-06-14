import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
