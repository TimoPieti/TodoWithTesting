import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoItem} from './interfaces';

interface Props {
  item?: TodoItem;
  requestClose: () => void;
}

export const TodoModalView = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.requestClose}>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{`Homma: ${
          props.item ? props.item.title : ''
        }`}</Text>
        <Text style={styles.itemText}>{`Päivä: ${
          props.item ? props.item.date : ''
        }`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000055',

    justifyContent: 'flex-end',
  },
  itemView: {
    height: 300,
    padding: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  itemText: {
    fontSize: 16,
  },
});
