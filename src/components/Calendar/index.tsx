/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo, useCallback, useMemo} from 'react';
import View from '../View';
import {FlatList} from 'react-native';
import {getAllDatesOfYear} from '../../utils/general.utils';
import CalendarItem from '../CalendarItem';

const Calendar: FC<{flatListRef?: keyof typeof FlatList}> = ({flatListRef}) => {
  const yearDays = useMemo(() => {
    return getAllDatesOfYear(2023);
  }, []);
  const renderItem = useCallback((item: Date) => {
    return <CalendarItem item={item} />;
  }, []);
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
        keyExtractor={item => item.toString()}
        data={yearDays}
        renderItem={({item}) => renderItem(item)}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        })}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default memo(Calendar);
