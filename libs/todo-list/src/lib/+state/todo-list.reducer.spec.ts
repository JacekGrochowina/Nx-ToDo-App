import { TodoListEntity } from './todo-list.models';
import * as TodoListActions from './todo-list.actions';
import { State, initialState, reducer } from './todo-list.reducer';

describe('TodoList Reducer', () => {
  const createTodoListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TodoListEntity);

  beforeEach(() => {});

  describe('valid TodoList actions', () => {
    it('loadTodoListSuccess should return set the list of known TodoList', () => {
      const todoList = [
        createTodoListEntity('PRODUCT-AAA'),
        createTodoListEntity('PRODUCT-zzz'),
      ];
      const action = TodoListActions.loadTodoListSuccess({ todoList });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
