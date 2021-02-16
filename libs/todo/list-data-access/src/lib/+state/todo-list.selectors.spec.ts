import { TodoListEntity } from './todo-list.models';
import { State, todoListAdapter, initialState } from './todo-list.reducer';
import * as TodoListSelectors from './todo-list.selectors';

describe('TodoList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodoListId = (it) => it['id'];
  const createTodoListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TodoListEntity);

  let state;

  beforeEach(() => {
    state = {
      todoList: todoListAdapter.setAll(
        [
          createTodoListEntity('PRODUCT-AAA'),
          createTodoListEntity('PRODUCT-BBB'),
          createTodoListEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('TodoList Selectors', () => {
    it('getAllTodoList() should return the list of TodoList', () => {
      const results = TodoListSelectors.getAllTodoList(state);
      const selId = getTodoListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TodoListSelectors.getSelected(state);
      const selId = getTodoListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTodoListLoaded() should return the current 'loaded' status", () => {
      const result = TodoListSelectors.getTodoListLoaded(state);

      expect(result).toBe(true);
    });

    it("getTodoListError() should return the current 'error' state", () => {
      const result = TodoListSelectors.getTodoListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
