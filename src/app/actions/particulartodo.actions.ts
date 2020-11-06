import { Action } from '@ngrx/store';

export enum ParticulartodoActionTypes {
  LoadParticulartodos = '[Particulartodo] Load Particulartodos',
  LoadParticulartodosFailure = '[Particulartodo] Load Particulartodos Failure',
}

export class LoadParticulartodos implements Action {
  readonly type = ParticulartodoActionTypes.LoadParticulartodos;
  constructor(public payload: { data: any }) { }
}

export class LoadParticulartodosFailure implements Action {
  readonly type = ParticulartodoActionTypes.LoadParticulartodosFailure;
  constructor(public payload: { error: any }) { }
}

export type ParticulartodoActions = LoadParticulartodos | LoadParticulartodosFailure;

