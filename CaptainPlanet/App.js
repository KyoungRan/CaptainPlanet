import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

<<<<<<< HEAD
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>캡틴 플래닛 화이팅!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
=======
class SelectTheme extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			DataSource: ds.cloneWithRows(['row 1', 'row 2']),
		}
	}

	render() {
		return (
			<View>
				<Text>관심 있는 테마를 골라주세요.</Text>
				<Text>나만의 서점을 추천해 드립니다.</Text>
				<ListView dataSource={this.state.dataSource} renderRow={{rowData} => <Text>{rowData}</Text>} />
			</View>
		)
	}
}
>>>>>>> master
