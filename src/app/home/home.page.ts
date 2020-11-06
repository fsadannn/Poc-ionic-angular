import { Component, ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, selectTodosError, selectTodos } from '../reducers/index';
import { LoadTodoss } from '../actions/todos.actions';
import { TodoModel } from '../model/todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public username: string;
  public todos$: Observable<TodoModel[]>;
  public error$: Observable<string>;

  constructor(
    private storage: Storage,
    private router: Router,
    private store: Store<AppState>) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.error$ = this.store.pipe(select(selectTodosError));
    this.loadData();
    this.storage.ready().then((result) => {
      result.getItem('user').then((res) => {
        console.log('home', res);
        // tslint:disable-next-line: no-string-literal
        this.username = res['name'];
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  loadData(){
    this.todos$ = this.store.pipe(select(selectTodos));
    this.store.dispatch(new LoadTodoss());
  }

  loadMore(event){
    event.target.complete();
  }

  logout(){
    this.storage.ready().then((result) => {
      result.removeItem('user').then((val) => {
        this.router.navigate(['login']);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}
