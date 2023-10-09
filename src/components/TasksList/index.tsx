import React, {FC} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import calendarStore from '../../state/calendarStore';
import FlexView from '../FlexView';
import {getTRDate} from '../../utils/general.utils';
import {Texts} from '../../common/enums';
import Text from '../Text';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import useFirebaseFirestore from '../../hooks/useFirebaseFirestore';

const TasksList: FC<{
  renderItem: any;
  renderHiddenItem: any;
}> = ({renderItem, renderHiddenItem}) => {
  const {selectedCalendarDate} = calendarStore();
  const {user} = useFirebaseAuth();
  const {data} = useFirebaseFirestore();
  // Date filter
  let filteredData = data?.filter((item: any) => {
    return getTRDate(item.date).getTime() === selectedCalendarDate.getTime();
  });
  // User filter
  filteredData = filteredData.filter((item: any) => {
    return item.uId === user?.uid;
  });
  // User filter
  filteredData = filteredData.sort((x, y) => {
    return x.priority - y.priority;
  });
  return filteredData.length > 0 ? (
    <SwipeListView
      showsVerticalScrollIndicator={false}
      data={filteredData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-150}
      disableRightSwipe={true}
    />
  ) : (
    <FlexView flex={0.7} justifyContent="center" alignItems="center">
      <Text color="darkGrey" label={`${Texts.home_no_task}`} variant="body1" />
    </FlexView>
  );
};

export default TasksList;
