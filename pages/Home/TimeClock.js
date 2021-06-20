/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

const TimeClock = props => {
  const [time, setTime] = useState('');

  let timer = null;
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.viewTimeParent}>
      <Text style={styles.fontCityTime}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewCityTime: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  viewTimeParent: {
    backgroundColor: '#3c7dd3',
    borderRadius: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.68,
  },
  fontCityTime: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
});
export default TimeClock;
