import React from 'react';
import {StatusBar, View} from 'react-native';
import './lib/dayjs';

import Routes from './routes';

function App() {
  return (
    <View className="flex-1">
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

export default App;
