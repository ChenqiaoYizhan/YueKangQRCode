import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  BottomModal,
} from 'react-native-modals';

const City = props => {
  const cities = "广州、深圳、珠海、汕头、佛山、韶关、湛江、肇庆、江门、茂名、惠州、梅州、汕尾、河源、阳江、清远、东莞、中山、潮州、揭阳、云浮".split(/、/)

  return <View style={styles.all}>
    <BottomModal
      visible={props.show}
      onTouchOutside={() => props.onClose()}
      height={0.5}
      width={1}
      onSwipeOut={() => props.onClose()}
      modalTitle={
        <ModalTitle
          title="请选择您当前城市"
          hasTitleBar
        />
      }
    >
      <ModalContent
        style={{
          backgroundColor: 'fff',
        }}
      >
        <FlatList data={cities} numColumns={3}
          keyExtractor={(item, index) => index}
          renderItem={(item) => <TouchableOpacity
            style={styles.viewItems}
            onPress={() => {
              props.onCityPress(item.item)
            }}
          >
            <View style={[styles.viewItem]}>
              <Text>{`${item.item}市`}</Text>
            </View>
          </TouchableOpacity>}
        />
      </ModalContent>
    </BottomModal>
  </View>
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  viewItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: (Dimensions.get('screen').width - 36) / 3,
    paddingHorizontal: 16,
    paddingTop: 18
  },
  viewItem: {
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 4,
    height: 32,
    width: (Dimensions.get('screen').width) / 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: 'grey'
  }
})

export default City