import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

console.log(AsyncStorage.getAllKeys());

// 유저 닉네임 저장
AsyncStorage.setItem('nickname','User1', () => {
    console.log('유저 닉네임 저장 완료')
});
  
// 유저 닉네임 불러오기
AsyncStorage.getItem('nickname', (err, result) => {
    console.log(result); // User1 출력
    const aplain = result;
});



class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } 
          </Text>
          {/* <Text>{aplain}</Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;