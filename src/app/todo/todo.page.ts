import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private todoProvider: TodosProviderService, private activatedRoute: ActivatedRoute) { }

  sub;

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((params)=>{
      this.Id = params.get('Id');
      this.todoData$ = this.todoProvider.getTodo(this.Id).pipe(share());
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
