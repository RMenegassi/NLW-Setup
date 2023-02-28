import {View, Text, ScrollView, Alert} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import Header from '../components/Header';
import Loading from '../components/Loading';
import {HabitDay, day_size} from '../components/HabitDay';

import {api} from '../lib/axios';
import {generateDatesFromYearBeginning} from '../utils/generate-dates-from-year-beginning';
import dayjs from 'dayjs';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

const Home = () => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/summary');
      console.log(response.data);
      setSummary(response.data);
    } catch (e) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

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
        {summary && (
          <View className="flex-row flex-wrap">
            {datesFromYearStart.map(date => {
              const dayWithHabits = summary.find(day => {
                return dayjs(date).isSame(day.date, 'day');
              });

              return (
                <HabitDay
                  key={date.toISOString()}
                  onPress={() => navigate('habit', {date: date.toISOString()})}
                  date={date}
                  amountOfHabits={dayWithHabits?.amount}
                  amountCompleted={dayWithHabits?.completed}
                />
              );
            })}

            {amountOfDaysToFill > 0 &&
              Array.from({length: amountOfDaysToFill}).map((_, index) => (
                <View
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{width: day_size, height: day_size}}
                  key={index}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
