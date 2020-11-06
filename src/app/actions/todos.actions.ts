import { Action } from '@ngrx/store';

export enum TodosActionTypes {
  LoadTodoss = '[Todos] Load Todoss',
  LoadTodossSuccess = '[Todos] Load Todoss Success',
  LoadTodossFailure = '[Todos] Load Todoss Failure',
}

export class LoadTodoss implements Action {
  readonly type = TodosActionTypes.LoadTodoss;
}

export class LoadTodossSuccess implements Action {
  readonly type = TodosActionTypes.LoadTodossSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadTodossFailure implements Action {
  readonly type = TodosActionTypes.LoadTodossFailure;
  constructor(public payload: { error: any }) { }
}

export type TodosActions = LoadTodoss | LoadTodossSuccess | LoadTodossFailure;

