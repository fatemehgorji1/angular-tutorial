import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from '../action/tutorial.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name:string, url:string) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

  ngOnInit() {
  }

}
