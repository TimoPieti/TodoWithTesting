import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {TodoItem} from './interfaces';
import {TodoItemListView} from './TodoListView';
import {TodoModalView} from './TodoModalView';

interface Props {
  items: TodoItem[];
  loading: boolean;
  showItemDetails: boolean;
  selectedItem?: TodoItem;
  itemSelected: (item: TodoItem) => void;
  hideItemDetails: () => void;
}

export const TodoView = (props: Props) => {
  const {
    showItemDetails,
    hideItemDetails,
    selectedItem,
    items,
    loading,
    itemSelected,
  } = props;
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
        items={items}
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
