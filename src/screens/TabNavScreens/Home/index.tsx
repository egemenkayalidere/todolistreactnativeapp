/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View as RNView,
  FlatList,
  Image,
} from 'react-native';
import ScreenView from '../../../components/ScreenView';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import View from '../../../components/View';
import Text from '../../../components/Text';
import {
  getTRDate,
  humanFriendlyDate,
  isToday,
} from '../../../utils/general.utils';
import {theme} from '../../../themes/theme';
import TaskItem from '../../../components/TaskItem';
import {Texts} from '../../../common/enums';
import TasksList from '../../../components/TasksList';
import Calendar from '../../../components/Calendar';
import calendarStore from '../../../state/calendarStore';
import useFirebaseAuth from '../../../hooks/useFirebaseAuth';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TabPaths} from '../../../navigation/paths/tab.paths';
import useFirebaseFirestore from '../../../hooks/useFirebaseFirestore';

const Home = () => {
  const {selectedCalendarDate, setCalendarDate} = calendarStore();
  const {signOut, user} = useFirebaseAuth();
  const {navigate} = useNavigation();
  const {deleteItem} = useFirebaseFirestore();

  const flatListRef = useRef<FlatList>(null);

  const scrollToToday = () => {
    flatListRef.current?.scrollToIndex({animated: true, index: 0});
    setCalendarDate(getTRDate());
  };

  const _deleteItem = (rowData: any) => {
    deleteItem(rowData.item.id);
  };

  const renderItem = (data: any) => <TaskItem data={data} />;

  const renderHiddenItem = (rowData: any) => (
    <RNView style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => _deleteItem(rowData)}>
        <Text label="Delete" variant="body2Bold" color="white" />
      </TouchableOpacity>
    </RNView>
  );

  return (
    <ScreenView>
      <StatusBar barStyle={'dark-content'} />
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.white]}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 24}}>
          <View
            marginTop={24}
            width={'100%'}
            borderRadius={12}
            justifyContent="space-between"
            flexDirection="row">
            <View>
              <Text label={Texts.home_welcome} variant="welcomeText" />
              <Text label={user?.email.split('@')[0]} variant="welcomeText2" />
              <Text
                label={Texts.home_today_is + humanFriendlyDate()}
                variant="body1"
              />
            </View>
            <Pressable
              onPress={signOut}
              style={{
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./../../../assets/images/log-out.png')}
                style={{width: 24, height: 24, marginLeft: 2}}
                tintColor={theme.colors.darkGrey}
              />
            </Pressable>
          </View>
          <View
            marginTop={12}
            width={'100%'}
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="row">
            <Text
              color="darkGrey"
              label={Texts.home_calendar}
              variant="title3"
            />
            <Pressable onPress={scrollToToday}>
              <Text
                color="darkGrey"
                label={Texts.home_go_to_today}
                variant="body2"
              />
            </Pressable>
          </View>
          <Calendar flatListRef={flatListRef} />
          <View
            width={'100%'}
            height={50}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center">
            <View flexDirection="row">
              <Text
                color="darkGrey"
                label={`${Texts.home_tasks_of}`}
                variant="title3"
              />
              <Text
                color="darkGrey"
                label={`"${
                  isToday(selectedCalendarDate)
                    ? 'Today'
                    : humanFriendlyDate(selectedCalendarDate)
                }"`}
                variant="title3"
              />
            </View>
          </View>
          <TasksList
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
          />
          <View
            width={'100%'}
            height={50}
            justifyContent="center"
            alignItems="center"
            position="absolute"
            alignSelf="center"
            bottom={50}>
            <Button
              width={50}
              height={50}
              borderRadius={12}
              backgroundColor={theme.colors.primary}
              opacity={0.7}
              textColor={'white'}
              text={'+'}
              variant={'title1'}
              onPress={() => navigate(TabPaths.CreateTask as never)}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 80,
    borderRadius: 12,
  },
  hiddenButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 80,
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    backgroundColor: theme.colors.secondary, // Red
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default Home;
