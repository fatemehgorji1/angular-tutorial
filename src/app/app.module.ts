import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { reducer } from '../app/reducers/tutorial.reducer';
import { ReadComponent } from 'src/app/read/read.component';
import { CreatComponent } from './creat/creat.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorials: reducer
    })


  ],

})
export class AppModule { }
