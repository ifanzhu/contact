'use strict'
import React, {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native'

export default {

  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Image
           source={require('image!navback')}
           style={styles.navBarLeftIcon} />
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
    return (
      <View />
    )
  },

  Title(route, navigator, index, navState) {
    if (!route.title) {
      return (
        <Text style={styles.navBarText}>
          我的APP
        </Text>
      )
    }
    return (
      <Text style={styles.navBarText}>
        {route.title}
      </Text>
    )
  },

}

const styles = StyleSheet.create({
  navBarText: {
    top: Platform.OS == 'ios' ? 0 : 24,
    fontSize: 14,
    color: '#fff',
    marginLeft:0,
    paddingLeft:0

  },
  navBarLeftButton: {
    paddingLeft: 10,
    paddingRight:0,
    marginRight:0
  },
  navBarLeftIcon:{
       height:40,
       paddingRight:0,
       marginRight:0
  },
  rightBtnView:{

  },
})