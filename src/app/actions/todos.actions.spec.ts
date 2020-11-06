import * as TodosActions from './todos.actions';

describe('Todos', () => {
  it('should create an instance', () => {
    expect(new TodosActions.LoadTodoss()).toBeTruthy();
  });
});
