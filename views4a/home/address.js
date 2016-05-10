

var React = require('react-native');
var Util = require('../util');
var Service = require('./../service');
import ActionSheet from 'react-native-actionsheet';
var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  Linking,
  Alert,
} = React;


var telmail={
       tel: '',
      email: ''
}

var Address = React.createClass({


  render: function(){
    var view = [];
    var items = this.props.data.status? this.props.data.data: [];
    var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9'];
    var color = {
      backgroundColor: colors[parseInt(Math.random()*7)]
    };

    for(var i in items){
      view.push(
        <View key={'addressItem' + i} style={styles.row}>
          <View style={[styles.text, color]}>
            <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>
              {items[i].username.substr(0, 1) || '未'}
            </Text>
          </View>
          <View style={styles.part}>
            <Text>
              {items[i].username}
            </Text>
            <Text style={styles.unColor}>
              {(items[i].partment||'') + '部－' + (items[i].tag||'') + '人员'}
            </Text>
          </View>
          <View style={{flex: 1}}>
              <TouchableHighlight underlayColor="#fff"
                         onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email)}>
                 <Text style={styles.link}>
                   {items[i].tel}
                  </Text>
               </TouchableHighlight>
             <TouchableHighlight underlayColor="#fff"
                         onPress={this.showActionSheet.bind(this, items[i].tel, items[i].email)}>
                           <Text style={styles.link}>
                               {items[i].email}
                           </Text>
             </TouchableHighlight>
           </View>

        </View>
              );
    }
  var options=  ['拨打电话','发送短信' ,'发送邮件','取消'];
    return (
     <View style={{flex: 1,paddingTop:30, marginTop:50}}>
      <ScrollView style={{marginBottom: 64}}>
        {view}
      </ScrollView>
      <ActionSheet
                               ref={(o) => this.ActionSheet = o}
                               title=""
                               options={options}
                               cancelButtonIndex={3}
                               destructiveButtonIndex={3}
                               onPress={this._handlePress}
                           />
        </View>
    );
  },



 _handlePress:function(index) {
 //Alert.alert("提示","tel="+telmail.tel+" email="+telmail.email);
 var  seltel=telmail.tel;
 var selemail=telmail.email;
    var events = [];
    events.push(function(){
      Linking.openURL('tel://' + seltel);
    });
    events.push(function(){
      Linking.openURL('sms://' + seltel);
    });
    events.push(function(){
      Linking.openURL('mailto://' + selemail);
    });
  events[index] && events[index]();

    },

 showActionSheet: function(tel,email) {
       telmail.tel=tel;
       telmail.email=email;
        this.ActionSheet.show();
  },
});

var styles = StyleSheet.create({
  row:{
    height:80,
    borderBottomWidth: Util.pixel,
    borderBottomColor:'#ccc',
    flexDirection:'row',
    alignItems:'center',
     flex: 1
  },
  text:{
    width:50,
    height:50,
    borderRadius:4,
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#E30082',
  },
  part:{
    marginLeft:5,
    flex:1,
  },
  link:{
    color:'#1BB7FF',
    marginTop:2,
  },
  unColor:{
    color: '#575656',
    marginTop:8,
    fontSize:12,
  }
});

module.exports = Address;