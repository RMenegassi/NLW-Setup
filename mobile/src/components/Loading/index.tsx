import {ActivityIndicator} from 'react-native';
import React from 'react';

import {Container} from './styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#7C3AED" />
    </Container>
  );
};

export default Loading;
