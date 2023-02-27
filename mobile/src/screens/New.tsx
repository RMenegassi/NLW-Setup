import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';
import colors from 'tailwindcss/colors';

import BackButton from '../components/BackButton';
import CheckBox from '../components/CheckBox';
import {api} from '../lib/axios';

const avaibleWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feita',
  'Sexta-feira',
  'Sábado',
];

const New = () => {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToogleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState =>
        prevState.filter(weekDay => weekDay !== weekDayIndex),
      );
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  };

  const handleCreateNewHabit = async () => {
    try {
      if (!title.trim() || weekDays.length === 0) {
        Alert.alert(
          'Novo Hábito',
          'Informe o nome do hábito e escolha a periodicidade.',
        );
        return;
      }

      await api.post('/habits', {title, weekDays});
      setTitle('');
      setWeekDays([]);

      Alert.alert('Novo hábito', 'Hábito criado com sucesso!');
    } catch (e) {
      console.log(e);
      Alert.alert('Ops', 'Não foi possível criar o novo hábito');
    }
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {avaibleWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            title={weekDay}
            onPress={() => handleToogleWeekDay(index)}
            checked={weekDays.includes(index)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          onPress={handleCreateNewHabit}>
          <Icon name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default New;
