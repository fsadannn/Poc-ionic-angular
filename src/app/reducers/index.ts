import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoModel } from '../model/todo';
import { TodosActions, TodosActionTypes } from '../actions/todos.actions';
import { ParticulartodoActions, ParticulartodoActionTypes } from '../actions/particulartodo.actions';

export interface TodosState {
  todos: TodoModel[] | null;
  error: string | null;
}

export interface ParticularTodoState {
  Id: number | null
  todo: TodoModel | null;
  error: string | null;
}

export function todosReducer(state: TodosState, action: TodosActions): TodosState {
  switch (action.type) {
    case TodosActionTypes.LoadTodoss:
      return {
        todos: null,
        error: null,
       };

      case TodosActionTypes.LoadTodossSuccess:
      return {
        todos: action.payload.data,
        error: null,
      };

      case TodosActionTypes.LoadTodossFailure:
      return {
        todos: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export function particularTodoReducer(state: ParticularTodoState, action: ParticulartodoActions): ParticularTodoState {
  switch (action.type) {
    case ParticulartodoActionTypes.LoadParticulartodos:
      return {
        Id: action.payload.Id,
        todo: null,
        error: null,
       };

       case ParticulartodoActionTypes.LoadParticulartodosSuccess:
        return {
          Id: state.Id,
          todo: action.payload.data,
          error: null,
         };

      case ParticulartodoActionTypes.LoadParticulartodosFailure:
      return {
        Id: state.Id,
        todo: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
}



export interface AppState {
  todos: TodosState;
  particularTodo: ParticularTodoState;

}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  particularTodo: particularTodoReducer
};

export const selectTodos = (state: AppState) => state.todos.todos;

export const selectTodosError = (state: AppState) => {
  console.log(state.todos.error);
  return state.todos.error;
}

export const selectParticularTodo = (state: AppState) => state.particularTodo.todo;

export const selectParticularTodoError = (state: AppState) => state.particularTodo.error;


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
