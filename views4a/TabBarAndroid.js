const React = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image
} = React;


const TabBarAndroid = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    underlineColor: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
  },

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    const activeTextColor = this.props.activeTextColor || 'navy';
    const inactiveTextColor = this.props.inactiveTextColor || 'black';
    const textStyle = this.props.textStyle || {};
   if(name=="首页"){
        var iconn=isTabActive ? require('image!home') : require('image!home_h');
   }else if(name=="公告"){
	   var iconn=isTabActive ? require('image!gonggao') : require('image!gonggao_h'); 
   }else if(name=="管理"){
	   var iconn=isTabActive ? require('image!manager') : require('image!manager_h'); 
   }else if(name=="关于"){
	    var iconn=isTabActive ? require('image!about') : require('image!about_h');  
   }else{
	   var iconn=isTabActive ? require('image!home') : require('image!home_h');
   }
    return (
	    <TouchableOpacity   key={name}   onPress={() => this.props.goToPage(page)} style={styles.tab}>	
		<View>		
		<Image style={styles.img}   source={iconn}></Image>
        <Text style={[{color: isTabActive ? activeTextColor : inactiveTextColor, fontWeight: isTabActive ? 'bold' : 'normal', }, textStyle]}>
          {name}
        </Text>
       </View>
	  </TouchableOpacity>  )  ;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: this.props.underlineColor || 'navy',
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor || null, }, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
       
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },  
  img:{      
    borderRadius:5,
  }
});

module.exports = TabBarAndroid;
