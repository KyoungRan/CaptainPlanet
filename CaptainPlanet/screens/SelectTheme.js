import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

class SelectTheme extends Component {
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
