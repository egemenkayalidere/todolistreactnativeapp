import React, {FC} from 'react';
import View from '../View';
import {theme} from '../../themes/theme';
import {Image, Pressable} from 'react-native';
import FlexView from '../FlexView';
import Text from '../Text';
import useFirebaseFirestore from '../../hooks/useFirebaseFirestore';
import calendarStore from '../../state/calendarStore';

const TaskItem: FC<{data: any}> = ({data}) => {
  const {item} = data;
  const {updateItem} = useFirebaseFirestore();
  const {selectedCalendarDate} = calendarStore();
  return (
    <View
      backgroundColor={theme.colors.white}
      width={'100%'}
      height={80}
      borderRadius={12}
      paddingHorizontal={12}
      marginBottom={12}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Pressable
        onPress={() => {
          console.log('item', item);
          const updatedItem = {
            ...item,
            date: selectedCalendarDate.toString(),
            isCompleted: !item.isCompleted,
          };
          delete updatedItem.id;
          console.log('updatedItem', updatedItem);
          updateItem(updatedItem, item.id);
        }}>
        <View
          borderRadius={6}
          backgroundColor={theme.colors.lightGrey}
          width={24}
          height={24}
          justifyContent="center"
          alignItems="center">
          {item.isCompleted ? (
            <Image
              source={require('./../../assets/images/check-mark.png')}
              style={{width: 16, height: 16}}
              tintColor={theme.colors.primary}
            />
          ) : null}
        </View>
      </Pressable>
      <FlexView flex={0.9} pH={12}>
        <Text
          label={item.title}
          variant="body1"
          textDecorationLine={item.isCompleted ? 'line-through' : ''}
        />
        <Text
          label={item.description}
          variant="body2"
          color="midGrey"
          textDecorationLine={item.isCompleted ? 'line-through' : ''}
        />
      </FlexView>
      <FlexView flex={0.1}>
        {item.priority === 1 ? (
          <Image
            source={require('./../../assets/images/flag.png')}
            style={{width: 24, height: 24}}
          />
        ) : null}
      </FlexView>
    </View>
  );
};

export default TaskItem;
