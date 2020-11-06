import { Action } from '@ngrx/store';

export enum ParticulartodoActionTypes {
  LoadParticulartodos = '[Particulartodo] Load Particulartodos',
  LoadParticulartodosSuccess = '[Particulartodo] Load Particulartodos Success',
  LoadParticulartodosFailure = '[Particulartodo] Load Particulartodos Failure',
}

export class LoadParticulartodos implements Action {
  readonly type = ParticulartodoActionTypes.LoadParticulartodos;
}

export class LoadParticulartodosSuccess implements Action {
  readonly type = ParticulartodoActionTypes.LoadParticulartodosSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadParticulartodosFailure implements Action {
  readonly type = ParticulartodoActionTypes.LoadParticulartodosFailure;
  constructor(public payload: { error: any }) { }
}

export type ParticulartodoActions = LoadParticulartodos | LoadParticulartodosSuccess | LoadParticulartodosFailure;

