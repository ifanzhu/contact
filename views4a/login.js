var React = require('react-native');
var Util = require('./util');
var Service = require('./service');
var Main = require('./main');
var Hello = require('./hello');

var {
  StyleSheet,
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableHighlight,
  TextInput,
  Image,
  ScrollView,
  Alert,
  AsyncStorage
  } = React;

var Login = React.createClass({

  render : function(){
    return (
        <ScrollView style={styles.showLogin}>
                <View style={styles.container}>
                  <View>
                    <Image style={styles.logo} source={require('image!logo')}></Image>
                  </View>

                  <View style={styles.inputRow}>
                    <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱" onChangeText={this._getEmail}/>
                  </View>
                  <View style={styles.inputRow}>
                    <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword}/>
                  </View>

                  <View>
                    <TouchableHighlight  underlayColor="#fff" style={styles.btn} onPress={this._login}>
                      <Text style={{color:'#fff'}}>登录</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </ScrollView>
    );
  },


  getInitialState: function(){
    return {
        email: '',
        password:''
    };
  },

  _getEmail: function(val){
    var email = val;
    this.setState({
      email: email
    });
  },

  _getPassword: function(val){
    var password = val;
    this.setState({
      password: password
    });
  },

  _login: function(){
  if(!this.state.email){
  Alert.alert('提示','请输入邮箱');
  return ;
  }
   if(!this.state.password){
    Alert.alert('提示','请输入密码');
    return;
    }
  var navigator= this.props.navigator;
    var email = this.state.email;
    var password = this.state.password;
    var path = Service.host + Service.login;
        Util.post(path, {
          email: email,
          password: password,
          deviceId: '-97AB-443D-B083-4236E550FAD2',
        }, function(data){
       // Alert.alert('登录', 'data.status='+data.status);
          if(data.status){
            var user = data.data;
            //加入数据到本地
            AsyncStorage.multiSet([
              ['username', user.username],
              ['token', user.token],
              ['userid', user.userid],
              ['email', user.email],
              ['tel', user.tel],
              ['partment', user.partment],
              ['tag', user.tag],
            ], function(err){
              if(!err){
           //Alert.alert('登录', '加入数据到本地成功');
              }else{
          // Alert.alert('登录', '加入数据到本地失败');
              }
            });
         //Alert.alert('登录', '登录成功');
         navigator.push({
                             title: '首页',
                             name:'Main',
                             data: '',
                            });

          }else{
            Alert.alert('登录', '用户名或者密码错误');
          }
        });


  }

});


var styles = StyleSheet.create({
  showLogin:{
         flex:1,
         opacity:1
        },
         container:{
            marginTop:50,
            alignItems:'center',
          },
          logo:{
            width:100,
            height:100,
            resizeMode: Image.resizeMode.contain
          },
          inputRow:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'center',
            marginBottom:10,
          },
          input:{
            marginLeft:10,
            width:220,
            borderWidth:Util.pixel,
            height:45,
            paddingLeft:8,
            borderRadius:5,
            borderColor:'#ccc'
          },
          btn:{
            marginTop:10,
            width:80,
            height:45,
            backgroundColor:'#3BC1FF',
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 4,
          },

});


module.exports = Login;

