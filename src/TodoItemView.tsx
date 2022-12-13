import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TodoItem} from './interfaces';
import {isRowEven} from './utils';

interface Props {
  item: TodoItem;
  index: number;
  itemSelected: (item: TodoItem) => void;
}

export const TodoItemView = (props: Props) => {
  const rowStyle = [
    styles.container,
    {backgroundColor: isRowEven(props.index) ? 'white' : 'gray'},
  ];
  return (
    <TouchableOpacity
      style={rowStyle}
      onPress={() => props.itemSelected(props.item)}>
      <Text style={styles.itemText}>{props.item.title}</Text>
      <Text style={styles.itemText}>{props.item.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
