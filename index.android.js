'use strict';
var React = require('react-native');
var Home = require('./views4a/home');
var About = require('./views4a/about');
var Manager = require('./views4a/manager');
var Message = require('./views4a/message');
var Util = require('./views4a/util');
var Service = require('./views4a/service');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var TabBarAndroid=require('./views4a/TabBarAndroid.js');
var Login = require('./views4a/login');
var Main = require('./views4a/main');
var Hello = require('./views4a/hello');
var FeedView = require('./views4a/FeedView');
var WelcomeView = require('./views4a/WelcomeView');
var DefaultView = require('./views4a/DefaultView');
var Detail = require('./views4a/message/detail');
var AddUser = require('./views4a/manager/addUser');
var ModifyPassword = require('./views4a/manager/modifyPassword');
var DeleteUser = require('./views4a/manager/deleteUser');
var PostMessage = require('./views4a/manager/postMessage');
var Address = require('./views4a/home/address');
var RNActionSheet = require('./views4a/home/RNActionSheet');
var Webview = require('./views4a/about/webview');

import NavigationBar from  './views4a/NavigationBar'

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




var _navigator;

BackAndroid.addEventListener('hardwareBackPress',() => {
  if(_navigator && _navigator.getCurrentRoutes().length > 1){
    _navigator.pop();
    return true;
  }
  return false;
});



 var  _renderScene=function (router, navigator) {
                          _navigator = navigator;
                          var name=router.name;
                          var title=router.title;
                          var data=router.data;

                          if(name =="Main"){
                             return (<Main navigator={navigator}  title={title}  data={data} />);
                         }else  if(name =="Login"){
                             return (<Login navigator={navigator}  title={title}  data={data} />);
                         }else  if(name =="Detail"){
                           return (<Detail navigator={navigator}  title={title}  data={data} />);
                          }else  if(name =="Address"){
                             return (<Address    navigator={navigator}  title={title}  data={data}  />);
                          }else  if(name =="ModifyPassword"){
                              return (<ModifyPassword  navigator={navigator}  title={title}  data={data} />);
                           }else  if(name =="AddUser"){
                             return (<AddUser  navigator={navigator}  title={title}  data={data} />);
                           }else  if(name =="DeleteUser"){
                              return (<DeleteUser  navigator={navigator}  title={title}  data={data} />);
                           }else  if(name =="PostMessage"){
                               return (<PostMessage  navigator={navigator}  title={title}  data={data} />);
                           }else  if(name =="webview"){
                               return (<Webview  navigator={navigator}  title={title}  data={data} />);
                           }else  if(name =="Hello"){
                               return (<Hello navigator={navigator}  title={title}  data={data} />);
                          }else{
                            return (<WelcomeView navigator={navigator}  title={title}  data={data} />);
                         }

                       };

 var _configureScene=function(route){
       return Navigator.SceneConfigs.FloatFromRight;
     };



var address_book =  React.createClass({

  getInitialState: function(){
    return {
      isLoginedIn:false,
      isLoad:false
    };
  },

  async   _loginByToken () {
     try {
       var token=await AsyncStorage.getItem('token');
      // Alert.alert('token','token='+token);
       if(token){
        var path = Service.host + Service.loginByToken;
        var data=  await  Util.post_sync(path, {
               token: token
             });
        // Alert.alert('提示','data='+data.status);
         if(data){
              if(data.status){
                this.setState({
                   isLoginedIn:true,
                  });
               // Alert.alert('提示','isLoginedIn=true');
               }else{
                  this.setState({
                     isLoginedIn:false,
                      });
                  }
             }else{
                   this.setState({
                             isLoginedIn:false,
                          });
                  }
       }else{
      this.setState({
           isLoginedIn:false,
        });
       }
   }catch(e){
     console.error(e);
     this.setState({
              isLoginedIn:false,
           });
   }
          },

  componentDidMount: function(){
  var that=this;
    AsyncStorage.getItem('token', function(err, token){
      if(!err && token){
        var path = Service.host + Service.loginByToken;
        Util.post(path, {
          token: token
        },function(data){
          if(data && data.status){
            that.setState({
               isLoginedIn:true,
                 isLoad:true
            });
            //Alert.alert('提示','isLoginedIn=true');
          }else{
                   that.setState({
                      isLoginedIn:false,
                        isLoad:true
                   });
                 }
        });
      }else{
        that.setState({
           isLoginedIn:false,
             isLoad:true
        });
      }
    });

  },









  render: function(){

  var initialRouteMain = {
                title: '首页',
                name:'Main',
                data: ''
                      };
   var initialRouteLogin = {
          title: '登录',
          name:'Login',
          data:''
                      };
//                      var initialRouteTest = {
//                                title: 'WelcomeView',
//                                component:WelcomeView,
//                                passProps:{
//                                       data: ''
//                                           }
//                                            };

       if(this.state.isLoad){
        if(this.state.isLoginedIn){
            return ( <Navigator
                   initialRoute = {initialRouteMain}
                   configureScreen = {_configureScene}
                   renderScene={_renderScene}
                   navigationBar={
                               <Navigator.NavigationBar
                                 routeMapper={NavigationBar}
                                 style={styles.navBar}
                               />
                             }
                             />
                   );
         }else{
            return  ( <Navigator
                   initialRoute = {initialRouteLogin}
                   configureScreen = {_configureScene}
                   renderScene={_renderScene}
                   navigationBar={
                               <Navigator.NavigationBar
                                 routeMapper={NavigationBar}
                                 style={styles.navBar}
                               />
                             }
                             />
                   );
//  return  ( <Navigator
//                   initialRoute = {initialRouteTest}
//                   configureScreen = {_configureScene}
//                   renderScene={_renderScene} />
//                   );

      }
      }else{
       return null;
      }


  }

});

var styles = StyleSheet.create({
 navBar: {
    backgroundColor: '#ff666b', //导航背景色
    height: 44,
    marginBottom:5
  },
});

AppRegistry.registerComponent('address_book', () => address_book);
