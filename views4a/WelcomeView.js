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


var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({
                                                                                                  title: 'FeedView',
                                                                                                  component:FeedView,
                                                                                                  passProps:{
                                                                                                         data: ''
                                                                                                             }
                                                                                                              });
    },


    render() {
        return (
            <View >
                <Text  onPress={this.onPressFeed} >
                  Hi, Welcome to inspur!
                </Text>
            </View>
        );
    }

});


module.exports = WelcomeView;