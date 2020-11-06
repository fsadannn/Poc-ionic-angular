import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TodoModel } from '../../model/todo';

@Injectable()
export class TodosProviderService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('http://127.0.0.1:5001/todos');
  }

  getTodo(Id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`http://127.0.0.1:5001/todos/${Id}`);
  }


}
