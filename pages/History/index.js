import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';
import TabBar from '../../components/TabBar';
import Tabs from '../../components/Tabs';
import List from './List';

const History = props => {
  const [datas, setDatas] = useState([])

  const createDatas = () => {
    return Array.from({ length: 10 }, (_, i) => (
      [
        moment().format('YYYY-MM-DD HH:mm:ss'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
        '深圳XX医检验实验室'.replace('XX', ['金域', '海普洛斯'][parseInt(Math.random() * 2)]),
        '阴性'
      ]))
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setDatas(createDatas())
    }, 1000)
    return () => {
      timer && clearTimeout(timer)
    }
  }, []);

  return <SafeAreaView style={styles.all}>
    <View style={styles.all}>
      <TabBar
        onBackPress={() => {
          props.navigation.goBack()
        }}
        title='核酸检测记录'
      />
      <View style={{ height: 16 }} />
      <Text style={styles.textTitle}>核酸检测记录</Text>
      <View style={{ height: 24 }} />
      <Tabs tabs={['检测完成', '检测中']}
        onTabPress={(tab) => {
          setDatas(tab == '检测完成' ? createDatas() : [])
        }}
      />
      <View style={{ height: 8 }} />
      <List datas={datas} />
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 36,
    color: 'black',
    fontWeight: '500'
  }
})

export default History