import React from 'react';
import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ModalPortal} from 'react-native-modals';

class YueKangQRCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        <App />
        <ModalPortal />
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => YueKangQRCode);
