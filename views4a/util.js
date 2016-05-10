

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio,
  Alert
} = React;

var Util = {

  //单位像素
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  //post请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
    }).catch((error) => {
          console.error(error);
      })
      .done();
  },
   //post请求
   async  post_sync (url, data) {
     try{
      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36'
        },
        body: JSON.stringify(data)
      };

    var response= await  fetch(url, fetchOptions);
    if(response){
        var responseText=await response.text();
        if(responseText){
        // Alert.alert('提示','responseText='+responseText);
        return  JSON.parse(responseText);
       }else{
          return null;
       }
    }else{
       return null;
    }
 }catch(e){
   console.error(e);
   return null;
}
    },
  //Key
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

};

module.exports = Util;