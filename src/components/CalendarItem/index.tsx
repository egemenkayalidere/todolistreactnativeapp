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

const CalendarItem: FC<{item: Date}> = ({item}) => {
  const theme = useTheme();
  const {setCalendarDate, selectedCalendarDate} = calendarStore();
  const isSelected = item.getTime() === selectedCalendarDate.getTime();
  return (
    <Pressable
      onPress={() => {
        setCalendarDate(item);
      }}>
      <View
        backgroundColor={theme.colors[isSelected ? 'overlay' : 'white']}
        width={50}
        height={75}
        borderRadius={12}
        justifyContent="center"
        paddingVertical={24}
        alignItems="center"
        marginRight={12}>
        <Text
          label={
            isToday(item)
              ? 'Today'
              : specificMonthName(item).toString().slice(0, 3)
          }
          variant="body2Bold"
          color={isToday(item) ? 'secondary' : undefined}
        />
        <Text
          label={specificDayName(item).toString().slice(0, 3)}
          variant="body1"
        />
        <Text label={specificDayNumber(item).toString()} variant="body2Bold" />
      </View>
    </Pressable>
  );
};

export default memo(CalendarItem);
