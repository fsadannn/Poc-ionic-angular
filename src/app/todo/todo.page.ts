import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'


import { TodoModel } from '../model/todo';
import { TodosProviderService } from '../services/provider/todos-provider.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TODOPage implements OnInit {

  public Id;
  public todoData$: Observable<TodoModel>;

  constructor(private todoProvider: TodosProviderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.paramMap.get('Id');
    this.todoData$ = this.todoProvider.getTodo(this.Id);
  }

}
