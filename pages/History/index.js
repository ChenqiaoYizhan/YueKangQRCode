import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import TabBar from '../../components/TabBar';
import Tabs from '../../components/Tabs';
import List from './List';

const History = props => {
  const [datas, setDatas] = useState([]);

  const createDatas = () => {
    let days = [];
    let _datas = [];
    for (let i = 0; i < 10; i++) {
      days.push(parseInt(Math.random() * 100));
    }
    days = days.sort((a, b) => a - b);
    for (let i = 0; i < days.length; i++) {
      _datas.push([
        moment()
          .add('days', -1 * days[i])
          .format('YYYY-MM-DD HH:mm:ss'),
        moment()
          .add('days', -1 * days[i])
          .add('hours', parseInt(Math.random() * 24))
          .add('minutes', parseInt(Math.random() * 60))
          .add('seconds', parseInt(Math.random() * 60))
          .format('YYYY-MM-DD HH:mm:ss'),
        '深圳XX医检验实验室'.replace(
          'XX',
          ['金域', '海普洛斯'][parseInt(Math.random() * 2)],
        ),
        '阴性',
      ]);
    }
    return _datas;
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setDatas(createDatas());
    }, 1000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.all}>
        <TabBar
          onBackPress={() => {
            props.navigation.goBack();
          }}
          title="核酸检测记录"
        />
        <View style={{height: 16}} />
        <View style={styles.viewHeader}>
          <Text style={styles.textTitle}>核酸检测记录</Text>
          <TouchableOpacity style={styles.viewRefreshAll} onPress={() => {}}>
            <Image
              source={require('../../images/history_refresh.png')}
              style={styles.imageRefresh}
            />
            <View style={{width: 4}} />
            <Text style={styles.textRefresh}>刷新</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 24}} />
        <Tabs
          tabs={['检测完成', '检测中']}
          onTabPress={tab => {
            setDatas(tab == '检测完成' ? createDatas() : []);
          }}
        />
        <View style={{height: 8}} />
        <List datas={datas} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: 36,
    color: 'black',
    fontWeight: '500',
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  viewRefreshAll: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  imageRefresh: {
    height: 20,
    width: 20,
    tintColor: '#8bdc61',
  },
  textRefresh: {
    fontSize: 18,
    color: 'black',
  },
});

export default History;
