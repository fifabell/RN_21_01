// alignItems 는 가로로 가운데 정렬 justifyContent 는 세로로 가운데 정렬
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