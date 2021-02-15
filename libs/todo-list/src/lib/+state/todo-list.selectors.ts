import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TODO_LIST_FEATURE_KEY,
  State,
  TodoListPartialState,
  todoListAdapter,
} from './todo-list.reducer';

// Lookup the 'TodoList' feature state managed by NgRx
export const getTodoListState = createFeatureSelector<
  TodoListPartialState,
  State
>(TODO_LIST_FEATURE_KEY);

const { selectEntities } = todoListAdapter.getSelectors();

export const getTodoListLoaded = createSelector(
  getTodoListState,
  (state: State) => state.loaded
);

export const getTodoListEntities = createSelector(
  getTodoListState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTodoListState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTodoListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
