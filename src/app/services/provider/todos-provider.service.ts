import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TodoModel } from '../../model/todo';
import { API_URL } from '../../../environments/environment';

@Injectable()
export class TodosProviderService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${API_URL}/todos`);
  }

  getTodo(Id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${API_URL}/todos/${Id}`);
  }


}
