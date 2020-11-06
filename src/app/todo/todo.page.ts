import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AppState, selectParticularTodo, selectParticularTodoError } from '../reducers/index';
import { LoadParticulartodos } from '../actions/particulartodo.actions';
import { TodoModel } from '../model/todo';
import { TodosProviderService } from '../services/provider/todos-provider.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TODOPage implements OnInit {

  public Id;
  public todoData$: Observable<TodoModel>;
  public error$: Observable<string>;

  constructor(
    private todoProvider: TodosProviderService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
    ) { }

  sub;

  ngOnInit() {
    this.error$ = this.store.pipe(select(selectParticularTodoError));
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.Id = params.get('Id');
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadData(){
    this.todoData$ = this.store.pipe(select(selectParticularTodo));
    this.store.dispatch(new LoadParticulartodos({Id: this.Id}));
  }

}
