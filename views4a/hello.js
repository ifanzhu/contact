var React = require('react-native');
var {
  Text,
  StyleSheet,
  View
  } = React;


var Hello = React.createClass({

render : function(){
    return (

                <View style={styles.container}>
                      <Text style={styles.welcome} >
                          Hello World!
                      </Text>
                  </View>

    );
    }

});



var styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#F5FCFF'
},
welcome:{
 fontSize:30,
 textAlign:'center',
 margin:10
}

});


module.exports = Hello;