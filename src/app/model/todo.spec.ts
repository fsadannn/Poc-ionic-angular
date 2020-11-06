import { TodoModel } from './todo';

describe('TodoModel', () => {
  it('should create an instance', () => {
    expect(new TodoModel(true, 1, 'Test', 1)).toBeTruthy();
  });
});
