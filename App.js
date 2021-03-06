import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Image, Button, Alert,  } from 'react-native';
import DeviceInfo, {
  getApiLevel,
  getBrand,
  getVersion,
  getBuildNumber,
  getSystemVersion,
  getUniqueId,
  getModel,
  getPhoneNumber
} from 'react-native-device-info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    // backgroundColor: '#e93e42',
    alignItems:'center'
  },
  content: {
    flex: 0.6,
    // backgroundColor: '#f5a942',
    alignItems:'center',
    justifyContent:'center'
  },
  footer: {
    flex: 0.1,
    alignItems:'center',
    // backgroundColor: '#4fbc7a',
  },
  textInput: {
    alignSelf: 'stretch',
    textAlign:'center',
    padding: 1,
    paddingTop: 30,
    marginLeft: 50,
    borderBottomColor:'#000',
    margin:5,
    marginRight:50,
    borderBottomWidth: 1     // Add this to specify bottom border thickness
  },
});
// getPhoneNumber().then((phoneNumber) => {
//   console.log(1.);
//   console.log(phoneNumber);
//   console.log(2.);
// });
// const uniqueID = DeviceInfo.getUniqueID();
DeviceInfo.getPhoneNumber().then((phoneNumber) => {
  // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
  console.log("number: "+phoneNumber);
});

// DeviceInfo.getPhoneNumber().then((phoneNumber) => {
//   // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
//   console.log(3.);
//   console.log(phoneNumber);
//   console.log(4.);
// });
export default class AppView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image  source = {require('./img/logo.png')} 
                  style={{height:'100%',width:'50%',resizeMode:'contain'}} />
        </View>
        <View style={styles.content}>
          <Text>010-2918-6229</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='이름을 입력하고 확인을 눌러주세요'
          ></TextInput>
          <View style={[{width:"80%"}]}>
              <Button
                  onPress={() => Alert.alert('Simple Button pressed')}
                  title="확인"
                  color="#32458a"
              /> 
          </View> 
        </View>
        <View style={styles.footer}>
          <Text>회원가입</Text>
        </View>
      </SafeAreaView>
    );
  }
}