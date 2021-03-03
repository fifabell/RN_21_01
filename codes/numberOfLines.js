import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default class AppView extends Component {
  render() {
    return (
        <SafeAreaView style={styles.wrap}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="head">
          ellipsizeMode is "head" ellipsizeMode is "head" ellipsizeMode is "head" ellipsizeMode is "head" ellipsizeMode is "head" ellipsizeMode is "head"
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="middle">
          ellipsizeMode is "middle" ellipsizeMode is "middle" ellipsizeMode is "middle" ellipsizeMode is "middle" ellipsizeMode is "middle" 
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          ellipsizeMode is "tail" ellipsizeMode is "tail" ellipsizeMode is "tail" ellipsizeMode is "tail" ellipsizeMode is "tail" 
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="clip">
          ellipsizeMode is "clip" ellipsizeMode is "clip" ellipsizeMode is "clip" ellipsizeMode is "clip" ellipsizeMode is "clip" 
        </Text>
      </SafeAreaView>
    );
  }
}