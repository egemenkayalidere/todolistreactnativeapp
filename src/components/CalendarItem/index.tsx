import React, {FC, memo} from 'react';
import calendarStore from '../../state/calendarStore';
import {Pressable} from 'react-native';
import View from '../View';
import {useTheme} from 'styled-components';
import Text from '../Text';
import {
  isToday,
  specificDayName,
  specificDayNumber,
  specificMonthName,
} from '../../utils/general.utils';

export type CalendarItemType = {
  key: number;
  date: Date;
  taskCount: number;
};

const CalendarItem: FC<{item: CalendarItemType}> = ({item}) => {
  const {key, date, taskCount} = item;
  const theme = useTheme();
  const {setCalendarDate, selectedCalendarDate} = calendarStore();
  const isSelected = date.getTime() === selectedCalendarDate.getTime();

  return (
    <Pressable
      key={key}
      onPress={() => {
        setCalendarDate(date);
      }}>
      <View
        backgroundColor={theme.colors[isSelected ? 'overlay' : 'white']}
        width={55}
        height={75}
        borderRadius={12}
        justifyContent="center"
        paddingVertical={24}
        alignItems="center"
        marginRight={12}>
        <Text
          label={
            isToday(date)
              ? 'Today'
              : specificMonthName(date).toString().slice(0, 3)
          }
          variant="body2Bold"
          color={isToday(date) ? 'secondary' : undefined}
        />
        <Text
          label={specificDayName(date).toString().slice(0, 3)}
          variant="body1"
        />
        <Text label={specificDayNumber(date).toString()} variant="body2Bold" />
        {taskCount > 0 && (
          <View
            position="absolute"
            width={5}
            height={5}
            backgroundColor={theme.colors.secondary}
            justifyContent="center"
            borderRadius={100}
            alignItems="center"
            top={5}
            right={5}
          />
        )}
      </View>
    </Pressable>
  );
};

export default memo(CalendarItem);
