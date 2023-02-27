import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import {HabitDay, day_size} from '../components/HabitDay';
import {generateDatesFromYearBeginning} from '../utils/generate-dates-from-year-beginning';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View className=" flex-1 bg-background px-8 py-16 ">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{width: day_size}}>
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map(date => (
            <HabitDay
              key={date.toISOString()}
              onPress={() => navigate('habit', {date: date.toISOString()})}
            />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({length: amountOfDaysToFill}).map((_, index) => (
              <View
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{width: day_size, height: day_size}}
                key={index}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
