import React, { useState } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

const Tabs = props => {
  const [index, setIndex] = useState(0)
  const loadTabs = () => {
    let array = [];
    for (let i = 0; i < props.tabs.length; i++) {
      let item = props.tabs[i];
      array.push(<TouchableOpacity key={i} style={styles.viewItem}
        onPress={() => {
          setIndex(i);
          props.onTabPress(item)
        }}
      >
        <Text style={[styles.text, { color: index === i ? '#2496f9' : 'grey' }]}>{item}</Text>
        <View style={{ height: 12 }} />
        <View style={[styles.viewLine, { backgroundColor: index === i ? '#2496f9' : 'white' }]} />
      </TouchableOpacity>)
    }
    return array;
  }
  return <View style={styles.all}>
    {loadTabs()}
  </View>
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around'
  },
  text: {
    color: 'blue',
    fontSize: 16,
  },
  viewLine: {
    height: 2,
    width: 128
  },
  viewItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
})

export default Tabs