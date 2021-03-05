// alignItems 는 가로로 가운데 정렬 justifyContent 는 세로로 가운데 정렬
/*

1. 모듈 설치는 
  yarn add [모듈명]  또는
  npm install [모듈명] 으로 한다.
  설치된 모듈은 package.json 에서 확인할 수 있다.

2. 모듈 적용은 react-native link [모듈명] 으로 한다.

3. mac 의 경우 아래 코드를 실행해줘야 한다.
  cd ios
  pod install

  
*/
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Login extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Text> Login </Text>
      </View>
    );
  }
}

export default Login;