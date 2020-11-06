import { Component, ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TodoModel } from '../model/todo';
import { TodosProviderService } from '../services/provider/todos-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public username: string;
  public todos$: Observable<TodoModel[]>;

  constructor(private todoProvider: TodosProviderService, private storage: Storage, private router: Router) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.todos$ = this.todoProvider.getTodos();
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
