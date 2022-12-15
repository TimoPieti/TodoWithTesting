import React, {useState} from 'react';
import {mockTodos} from '../__mocks__/mockTodos';
import {TodoItem} from './interfaces';
import {TodoView} from './TodoView';

export const TodoScreen = () => {
  const [data] = useState<TodoItem[]>(mockTodos);
  const [loading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TodoItem>();
  const [showItemDetails, setShowItemDetails] = useState(false);

  const itemSelected = (item: TodoItem) => {
    setSelectedItem(item);
    setShowItemDetails(true);
  };

  const hideItemDetails = () => {
    setShowItemDetails(false);
  };

  return (
    <TodoView
      items={data}
      loading={loading}
      showItemDetails={showItemDetails}
      selectedItem={selectedItem}
      itemSelected={itemSelected}
      hideItemDetails={hideItemDetails}
    />
  );
};
