'use strict';
var React = require('react-native');
var Home = require('./home');
var About = require('./about');
var Manager = require('./manager');
var Message = require('./message');
var Util = require('./util');
var Service = require('./service');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var TabBarAndroid=require('./TabBarAndroid.js');

var {
  StyleSheet,
  View,
  Text,
  Navigator,
  AppRegistry,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Alert,
  AsyncStorage,
  BackAndroid
} = React;



var Main =  React.createClass({

  render: function(){
  var  navigator=this.props.navigator;
  var message= this.state.message;

    return(
          <View style={styles.showIndex}>
             <ScrollableTabView initialPage={0}  tabBarPosition={'bottom'}  renderTabBar={() => <TabBarAndroid />}>
             <ScrollView  tabLabel={'首页'}  key="1" style={styles.tabView}>
                <Home    navigator={navigator } title={'首页'}  data={''} />
               </ScrollView>

              <ScrollView  tabLabel={'公告'}  key="2"  style={styles.tabView}>
                <Message   navigator={navigator} title={'公告'}  data={message}/>
             </ScrollView>

              <ScrollView  tabLabel={'管理'}  key="3"  style={styles.tabView}>
                  <Manager   navigator={navigator} title={'管理'}  data={''}/>
               </ScrollView>

               <ScrollView  tabLabel={'关于'}  key="4"   style={styles.tabView}>
                  <About   navigator={navigator} title={'关于'}  data={''}/>
                </ScrollView>

              </ScrollableTabView>
          </View>
    );
  },


  getInitialState: function(){
    return {
      message:'',
    };
  },


  componentDidMount: function(){
   var  that=this;
    var path = Service.host + Service.getMessage;
      Util.post(path, {
        key: Util.key
      }, function(data){
         that.setState({
            message:data,
         });
      });

    },

});

var styles = StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center'
  },

    tabView: {
      flex: 1,
      padding: 10,
      backgroundColor: 'rgba(0,0,0,0.01)'
    },
   showIndex:{
     marginTop:50,
        flex:1,
        opacity:1

         },

});


module.exports = Main;
