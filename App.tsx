import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {TodoScreen} from './src/TodoScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={styles.container.backgroundColor}
      />
      <TodoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123456cc',
  },
});

export default App;
