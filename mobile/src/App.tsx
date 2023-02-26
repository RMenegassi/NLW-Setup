import React from 'react';
import {StatusBar, View} from 'react-native';
import './lib/dayjs';

//import Loading from './components/Loading';
import Home from './screens/Home';

function App() {
  return (
    <View className="flex-1">
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

export default App;
