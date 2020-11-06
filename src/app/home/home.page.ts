import { Component, ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from '../model/todo';
import { TODOPage } from '../todo/todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public username: string;
  public todos: Array<TodoModel>;

  constructor(private http: HttpClient, private storage: Storage, private router: Router) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.storage.ready().then((result) => {
      result.getItem('user').then((res) => {
        console.log('home', res);
        this.username = res['name'];
        this.http.get('http://127.0.0.1:5001/todos').subscribe(res => {
          this.todos = (res as Array<object>).map<TodoModel>((value) => {
            return new TodoModel(value['completed'], value['id'], value['title'], value['userId']);
          });
          console.log(this.todos);
        });
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
