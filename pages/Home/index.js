/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Vaccin from './Vaccin';
import Nuclein from './Nuclein';
import Picker from 'react-native-picker';
import City from '../City';
import TimeClock from './TimeClock';

const Home = props => {
  const [nucleinTime, setNucleinTime] = useState('48');
  const [city, setCity] = useState('深圳');
  const [showCityModal, setShowCityModal] = useState(false);

  return (
    <View style={styles.all}>
      <View style={{height: 44}} />
      <Image
        source={require('../../images/wechat_tabbar.jpg')}
        style={styles.wechatHeader}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.viewCityTime}>
          <TouchableOpacity
            style={styles.viewCityMore}
            onPress={() => {
              setShowCityModal(true);
            }}>
            <Text style={styles.fontCityTime}>{city}</Text>
            <View style={{width: 4}} />
            <Image
              style={styles.imageCityMore}
              source={require('../../images/city_more.jpg')}
            />
          </TouchableOpacity>
          <TimeClock />
        </View>
        <View style={{height: 12}} />
        <Image
          source={require('../../images/wechat_code.jpg')}
          style={styles.wechatCode}
        />
        <View style={{height: 8}} />
        <View style={styles.viewItems}>
          <Nuclein
            duration={nucleinTime}
            time={moment()
              .add(
                nucleinTime == '近一周' ? -120 : -(parseInt(nucleinTime) + 6),
                'hours',
              )
              .format('YYYY-MM-DD HH:mm')}
            onItemLongPress={() => {
              Picker.init({
                pickerData: ['48', '72', '近一周'],
                onPickerConfirm: (pickedValue, pickedIndex) => {
                  setNucleinTime(pickedValue);
                },
                onPickerCancel: (pickedValue, pickedIndex) => {},
                onPickerSelect: (pickedValue, pickedIndex) => {},
              });
              Picker.show();
            }}
            onItemPress={() => {
              props.navigation.navigate('History');
            }}
          />
          <Vaccin
            message="暂未查询到数据"
            onItemPress={() => {
              Alert.alert('提示', '未查询到相关记录', [
                {
                  text: '确定',
                  onPress: () => {},
                },
              ]);
            }}
          />
        </View>
        <Image
          source={require('../../images/wechat_footer.jpg')}
          style={styles.wechatFooter}
        />
        <City
          show={showCityModal}
          onClose={() => {
            setShowCityModal(false);
          }}
          onCityPress={s => {
            setCity(s);
            setShowCityModal(false);
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    paddingHorizontal: 20,
  },
  viewCityMore: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  imageCityMore: {
    height: 16,
    width: 16,
  },
  viewCityTime: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  all: {
    flex: 1,
    backgroundColor: '#4594f8',
  },
  wechatHeader: {
    height: 55,
    width: Dimensions.get('screen').width,
  },
  wechatFooter: {
    height: 2322 / 2,
    width: Dimensions.get('screen').width,
  },
  wechatCode: {
    height: 323,
    width: Dimensions.get('screen').width,
  },
  fontCityTime: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
});
export default Home;
