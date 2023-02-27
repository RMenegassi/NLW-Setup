import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View className="bg-background flex-1 justify-center">
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
};

export default Loading;
