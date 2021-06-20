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
import None from './None';

const List = props => {
  return (
    <FlatList
      data={props.datas}
      showsVerticalScrollIndicator={false}
      renderItem={data => <Item item={data.item} />}
      ItemSeparatorComponent={() => <View style={styles.viewLine} />}
      keyExtractor={(item, index) => `${item}-${index}`}
      ListEmptyComponent={() => <None />}
    />
  );
};

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
  },
  textTitle: {
    fontSize: 36,
    color: 'black',
    fontWeight: '500',
  },
  viewLine: {
    height: 1,
    backgroundColor: '#d8d8d8',
    margin: 4,
  },
});

export default List;
