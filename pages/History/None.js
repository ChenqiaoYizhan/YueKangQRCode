import React from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import TabBar from '../../components/TabBar';
import Tabs from '../../components/Tabs';
import Item from './Item';

const None = props => {
  return (
    <View style={styles.all}>
      <Text style={styles.text}>暂未查询到相关数据</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').width,
    width: Dimensions.get('screen').width,
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});

export default None;
