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

var FeedView = React.createClass({
    goBack(){
      this.props.navigator.push( {
                                                                title: 'DefaultView',
                                                                component:DefaultView,
                                                                passProps:{
                                                                       data: ''
                                                                           }
                                                                            });
    },

    render() {
        return (
            <View >
                <Text  onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
    }
});

module.exports = FeedView;