import { Injectable } from '@angular/core';
import { Actions, Effect, ofType  } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import {
  ParticulartodoActionTypes,
  LoadParticulartodos,
  LoadParticulartodosSuccess,
  LoadParticulartodosFailure } from '../actions/particulartodo.actions';
import { TodosProviderService } from '../services/provider/todos-provider.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ParticulartodoEffects {

  @Effect()
  loadparticulartodo$ = this.actions$.pipe(
    ofType<LoadParticulartodos>(ParticulartodoActionTypes.LoadParticulartodos),
    mergeMap((action) => this.todosProvider.getTodo(action.payload.Id)
    .pipe(
      map(todoData => {
        return new LoadParticulartodosSuccess({data: todoData});
      }),
      catchError((errorMessage) => of(new LoadParticulartodosFailure({error: errorMessage.message})))
      ))
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private todosProvider: TodosProviderService) {}

}
