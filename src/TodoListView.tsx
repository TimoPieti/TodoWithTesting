import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {TodoItem} from './interfaces';
import {TodoItemView} from './TodoItemView';

interface Props {
  items: TodoItem[];
  loading: boolean;
  error?: boolean;
  itemSelected: (item: TodoItem) => void;
}

export const TodoItemListView = (props: Props) => {
  if (props.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.indicator} />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={props.items}
      renderItem={({item, index}) => (
        <TodoItemView
          item={item}
          index={index}
          itemSelected={props.itemSelected}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
