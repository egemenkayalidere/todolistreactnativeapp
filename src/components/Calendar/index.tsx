/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo, useCallback, useMemo} from 'react';
import View from '../View';
import {FlatList} from 'react-native';
import {getAllDatesOfYear} from '../../utils/general.utils';
import CalendarItem, {CalendarItemType} from '../CalendarItem';
import useFirebaseFirestore from '../../hooks/useFirebaseFirestore';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const Calendar: FC<{flatListRef?: keyof typeof FlatList}> = ({flatListRef}) => {
  let yearDays: Array<any> = useMemo(() => {
    return getAllDatesOfYear(2023);
  }, []);
  const renderItem = useCallback((item: CalendarItemType) => {
    return <CalendarItem item={item} />;
  }, []);
  const {data} = useFirebaseFirestore();
  const {user} = useFirebaseAuth();
  yearDays = yearDays.map((item: CalendarItemType, key) => {
    const taskCount = data.filter((_item: any) => {
      return (
        _item.date.toString() === item.toString() && _item.uId === user.uid
      );
    }).length;
    return {key, date: item, taskCount};
  });
  return (
    <View
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginTop={12}>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          width: '100%',
          borderRadius: 12,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        keyExtractor={item => item.key}
        data={yearDays}
        renderItem={({item}) => renderItem(item)}
        getItemLayout={(_, index) => ({
          length: 55,
          offset: 55 * index,
          index,
        })}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default memo(Calendar);
