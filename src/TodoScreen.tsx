import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {mockTodos} from '../__mocks__/mockTodos';
import {TodoItem} from './interfaces';
import {TodoItemListView} from './TodoListView';
import {TodoModalView} from './TodoModalView';

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
    <View style={styles.container}>
      <Modal
        visible={showItemDetails}
        animationType="fade"
        transparent={true}
        onRequestClose={hideItemDetails}>
        <TodoModalView item={selectedItem} requestClose={hideItemDetails} />
      </Modal>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo example</Text>
      </View>
      <TodoItemListView
        items={data}
        loading={loading}
        itemSelected={itemSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    backgroundColor: '#123456',
    minHeight: 40,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
