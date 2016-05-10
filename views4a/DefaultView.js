var React = require('react-native');
var FeedView = require('./FeedView');
var WelcomeView = require('./WelcomeView');
var DefaultView = require('./DefaultView');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} = React;


var DefaultView = React.createClass({

    render(){
      return (
          <View >
              <Text >Default view</Text>
          </View>
      )
    }
});

module.exports = DefaultView;