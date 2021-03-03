import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Image, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: '#e93e42',
    alignItems:'center'
  },
  content: {
    flex: 0.6,
    backgroundColor: '#f5a942',
  },
  footer: {
    flex: 0.1,
    backgroundColor: '#4fbc7a',
  },
});

export default class AppView extends Component {
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image  source = {require('./img/logo.png')} 
                  style={{height:'100%',width:'50%',resizeMode:'contain'}} />
        </View>
        <View style={styles.content}></View>
        <View style={styles.footer}></View>
      </SafeAreaView>
    );
  }
}