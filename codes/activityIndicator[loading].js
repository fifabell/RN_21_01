import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Modal, View, Text, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  popup: {
    height: 300,
    marginHorizontal: 40,
    backgroundColor: '#fff',
  },
});

export default class AppView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrap}>
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
      </SafeAreaView>
    );
  }
}