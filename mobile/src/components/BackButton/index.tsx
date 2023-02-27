import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import colors from 'tailwindcss/colors';

import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <Icon name="arrow-left" size={32} color={colors.zinc[400]} />
    </TouchableOpacity>
  );
};

export default BackButton;
