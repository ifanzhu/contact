
var React = require('react-native');
var {
  WebView,
  ScrollView,
  Text,
  View,
} = React;


var Webview = React.createClass({

  render: function(){
    return(
      <View style={{flex:1, marginBottom: 64}}>
        <WebView source={{uri: this.props.data}}/>
      </View>
    );
  }

});

module.exports = Webview;
