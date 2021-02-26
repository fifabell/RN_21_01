import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview'

const domain = 'https://mwebserver.parkland.co.kr/ShopApp/codeinfo_t/test2.php'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // indexPage: { uri: domain + '?CODE=ACL20102' }
            indexPage: { uri: domain  },
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.webview}
                    source={this.state.indexPage}
                    source={{
                      uri:   domain,  
                      body:  'param1=1&foo=2',
                      method:'POST'
                    }}
                    // source={{ uri: domain, method: 'POST', body: 'cat=himalayan&dog=pug&fish=shark'} }
                    onMessage={(event) =>alert(event.nativeEvent.data)}
                    originWhitelist={['*']}
                    domStorageEnabled={true}
                    allowFileAccessFromFileURLs={true}
                    startInLoadingState={true}
                    ref={webview => this.appWebview = webview}
                    mixedContentMode="compatibility"
                    javaScriptEnabled={true}
                    useWebKit={true}
                    // scalesPageToFit={false}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    webview: {
        flex: 1
    }
});