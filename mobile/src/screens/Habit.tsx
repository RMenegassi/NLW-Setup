import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

import {useRoute} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';
import CheckBox from '../components/CheckBox';

interface Params {
  date: string;
}

const Habit = () => {
  const route = useRoute();
  const {date} = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  console.log(date);

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className=" text-white font-extrabold text-3xl ">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30} />

        <View className="mt-6">
          <CheckBox checked={false} title="beber agua" />
          <CheckBox checked={true} title="caminhar" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Habit;
