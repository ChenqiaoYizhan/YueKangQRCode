import React from 'react';
import {AppRegistry, View, StyleSheet, Text, SafeAreaView} from 'react-native';

const Item = props => {
  const loadlines = () => {
    let array = [];
    let names = ['采样时间', '检测时间', '检测机构', '检测结果'];
    let values = props.item;
    for (let i = 0; i < names.length; i++) {
      array.push(
        <View key={i} style={[styles.viewLine, {marginBottom: 16}]}>
          <Text style={styles.textName}>{names[i]}</Text>
          <Text
            style={[
              styles.textValue,
              {color: values[i] === '阴性' ? '#12e06f' : 'grey'},
            ]}>
            {values[i]}
          </Text>
        </View>,
      );
    }
    return array;
  };

  return (
    <View style={styles.all}>
      <Text style={styles.textI}>孙宇鹏</Text>
      {loadlines()}
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    display: 'flex',
  },
  viewLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  textI: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginVertical: 16,
  },
  textName: {
    color: 'grey',
    fontSize: 16,
  },
  textValue: {
    fontSize: 16,
    color: 'grey',
  },
});

export default Item;
