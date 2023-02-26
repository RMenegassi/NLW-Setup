import React from 'react';
import {StatusBar} from 'react-native';

import Loading from './components/Loading';

import {Container} from './styles';

function App() {
  return (
    <Container>
      <Loading />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Container>
  );
}

export default App;
