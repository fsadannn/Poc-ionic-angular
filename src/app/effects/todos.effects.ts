import { Injectable } from '@angular/core';
import { Actions, Effect, ofType  } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { TodosActionTypes, LoadTodoss, LoadTodossFailure } from '../actions/todos.actions';
import { TodosProviderService } from '../services/provider/todos-provider.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class TodosEffects {


  @Effect()
  loadtodos$ = this.actions$.pipe(
    ofType<LoadTodoss>(TodosActionTypes.LoadTodoss),
    mergeMap((action) => this.todosProvider.getTodos()
    .pipe(
      map(todosData => {
        return new LoadTodoss({data: todosData});
      }),
      catchError((errorMessage) => of(new LoadTodossFailure({error: errorMessage})))
      ))
  );


  constructor(private actions$: Actions, private store: Store<AppState>, private todosProvider: TodosProviderService) {}

}
