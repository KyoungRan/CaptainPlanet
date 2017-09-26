import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
const util = require('util');

class SelectTheme extends Component {
  static navigationOptions = {
    title: 'First Screen'
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      DataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }

  render() {
    console.log(
      'this.props.navigation= ' +
        util.inspect(this.props.navigation, false, null)
    );
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>관심 있는 테마를 골라주세요.</Text>
        <Text>나만의 서점을 추천해 드립니다.</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
