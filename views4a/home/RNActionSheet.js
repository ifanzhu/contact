/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var Util = require('../util');
import ActionSheet from 'react-native-actionsheet';

var React = require('react-native');
var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    ScrollView
}  = React;




const buttons = ['取消', '确认退出', '😄😄😄', '哈哈哈'];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;


var RNActionSheet = React.createClass({

    _handlePress:function(index) {
    Alert.alert('RNActionSheet','RNActionSheet='+index);
    },

    show:function() {
        this.ActionSheet.show();
    },

    render:function() {
        return (
         <ScrollView style={{marginBottom: 64}}>
           <View  style={styles.row}>
            <View style={{flex: 1}}>
            <TouchableHighlight underlayColor="#fff">
                <Text  onPress={this.show}>SHOW</Text>
              </TouchableHighlight>

            </View>
                <ActionSheet
                                ref={(o) => this.ActionSheet = o}
                                title="确认要退出登录吗？"
                                options={['取消', '确认退出', '😄😄😄', '哈哈哈']}
                                cancelButtonIndex={0}
                                destructiveButtonIndex={1}
                                onPress={this._handlePress}
                            />
 </View>
  </ScrollView>
        );
    },
});


const styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'blue'
    },
     row:{
        height:80,
        borderBottomWidth: Util.pixel,
        borderBottomColor:'#ccc',
        flexDirection:'row',
        alignItems:'center',
        flex: 1
      },
});

module.exports = RNActionSheet;