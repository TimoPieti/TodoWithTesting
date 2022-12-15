/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TodoScreen} from '../src/TodoScreen';
import {TodoItemListView} from '../src/TodoListView';
import {mockTodos} from '../__mocks__/mockTodos';
import {TodoView} from '../src/TodoView';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders TodoScreen correctly', () => {
  renderer.create(<TodoScreen />);
});

it('renders TodoView correctly', () => {
  renderer.create(
    <TodoView
      items={[]}
      loading={false}
      showItemDetails={true}
      selectedItem={mockTodos[1]}
      itemSelected={() => {}}
      hideItemDetails={() => {}}
    />,
  );
});

it('renders TodoListView correctly', () => {
  renderer.create(
    <TodoItemListView items={[]} loading={false} itemSelected={() => {}} />,
  );
});

it('renders TodoListView with items correctly', () => {
  renderer.create(
    <TodoItemListView
      items={mockTodos}
      loading={false}
      itemSelected={() => {}}
    />,
  );
});

it('renders TodoListView when loading', () => {
  renderer.create(
    <TodoItemListView items={[]} loading={true} itemSelected={() => {}} />,
  );
});
