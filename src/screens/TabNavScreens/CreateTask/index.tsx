/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Pressable, ScrollView, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import ScreenView from '../../../components/ScreenView';
import LinearGradient from 'react-native-linear-gradient';
import View from '../../../components/View';
import Text from '../../../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppPaths} from '../../../navigation/paths/app.paths';
import FlexView from '../../../components/FlexView';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import useFirebaseFirestore from '../../../hooks/useFirebaseFirestore';
import useFirebaseAuth from '../../../hooks/useFirebaseAuth';
import calendarStore from '../../../state/calendarStore';
import Calendar from '../../../components/Calendar';
import Toast from 'react-native-toast-message';

const CreateTask = () => {
  const theme = useTheme();
  const {navigate} = useNavigation();
  const {addItem} = useFirebaseFirestore();
  const {user} = useFirebaseAuth();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);
  const {selectedCalendarDate} = calendarStore();
  return (
    <ScreenView>
      <StatusBar barStyle={'dark-content'} />
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.white]}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 24}}>
          <View
            height={50}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <FlexView
              flex={0.25}
              justifyContent="center"
              alignItems="flex-start">
              <Pressable
                onPress={() => navigate(AppPaths.Home as never)}
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  borderRadius: 12,
                }}>
                <Image
                  source={require('./../../../assets/images/left-arrow.png')}
                  style={{width: 18, height: 18}}
                  tintColor={theme.colors.darkGrey}
                />
              </Pressable>
            </FlexView>
            <FlexView flex={0.5} justifyContent="center" alignItems="center">
              <Text label={'Create Task'} variant="title3" />
            </FlexView>
            <FlexView flex={0.25} />
          </View>
          <ScrollView style={{flex: 1}}>
            <View
              marginTop={12}
              width={'100%'}
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection="row">
              <Text color="darkGrey" label={'Date'} variant="title3" />
            </View>
            <Calendar />
            <View
              marginTop={12}
              width={'100%'}
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection="row">
              <Text color="darkGrey" label={'Title'} variant="title3" />
            </View>
            <View marginTop={12}>
              <TextInput
                onChangeText={setTitle}
                placeholder={'Enter task title'}
                backgroundColor="white"
              />
            </View>
            <View
              marginTop={12}
              width={'100%'}
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection="row">
              <Text color="darkGrey" label={'Description'} variant="title3" />
            </View>
            <View marginTop={12}>
              <TextInput
                onChangeText={setDescription}
                placeholder={'Enter task description'}
                multiline
                numberOfLines={20}
                height={100}
                backgroundColor="white"
              />
            </View>
            <View
              marginTop={12}
              width={'100%'}
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection="row">
              <Text color="darkGrey" label={'Priority'} variant="title3" />
            </View>
            <View
              marginTop={12}
              height={100}
              flexDirection="row"
              justifyContent="space-between">
              <FlexView flex={0.3}>
                <Pressable onPress={() => setPriority(1)}>
                  <View
                    backgroundColor={
                      priority === 1 ? theme.colors.overlay : 'white'
                    }
                    height={45}
                    borderRadius={12}
                    justifyContent="center"
                    alignItems="center">
                    <Text color="darkGrey" label={'High!'} variant="body1" />
                  </View>
                </Pressable>
              </FlexView>
              <FlexView flex={0.3}>
                <Pressable onPress={() => setPriority(2)}>
                  <View
                    backgroundColor={
                      priority === 2 ? theme.colors.overlay : 'white'
                    }
                    height={45}
                    borderRadius={12}
                    justifyContent="center"
                    alignItems="center">
                    <Text color="darkGrey" label={'Normal'} variant="body1" />
                  </View>
                </Pressable>
              </FlexView>
              <FlexView flex={0.3}>
                <Pressable onPress={() => setPriority(3)}>
                  <View
                    backgroundColor={
                      priority === 3 ? theme.colors.overlay : 'white'
                    }
                    height={45}
                    borderRadius={12}
                    justifyContent="center"
                    alignItems="center">
                    <Text color="darkGrey" label={'Less'} variant="body1" />
                  </View>
                </Pressable>
              </FlexView>
            </View>
          </ScrollView>
          <View
            position="absolute"
            width={'100%'}
            height={100}
            bottom={50}
            alignSelf="center">
            <Button
              onPress={() => {
                if (!title || !description) {
                  Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Fill all the fields',
                  });
                  return;
                }
                addItem({
                  key: new Date().toString(),
                  uId: user?.uid ?? 'uid',
                  title,
                  description,
                  priority,
                  isCompleted: false,
                  date: selectedCalendarDate.toString(),
                });
              }}
              width={'100%'}
              height={55}
              borderRadius={12}
              backgroundColor={theme.colors.primary}
              text="Create"
              variant="button1"
              textColor="white"
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ScreenView>
  );
};

export default CreateTask;
