import React from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

const TabBar = props => {
  return <View style={styles.all}>
    <TouchableOpacity onPress={() => {
      props.onBackPress()
    }}>
      <Image source={require('../../images/tabbar_back.png')} style={styles.imageBack} />
    </TouchableOpacity>
    <Text style={styles.textTitle}>{props.title}</Text>
    <View style={styles.viewEmpty} />
  </View>
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  imageBack: {
    height: 18,
    width: 18,
    tintColor: 'black'
  },
  viewEmpty: {
    height: 18,
    width: 18
  },
  textTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
})

export default TabBar