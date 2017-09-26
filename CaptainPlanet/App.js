import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import SelectTheme from './screens/SelectTheme';
import DetailTheme from './screens/DetailTheme';

const Navigation = StackNavigator({
  First: { screen: SelectTheme }
});

export default class App extends Component {
  render() {
    <View>
      <Navigation />
    </View>;
  }
}
