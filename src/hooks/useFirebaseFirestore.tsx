/* eslint-disable react-hooks/exhaustive-deps */
// useFirebaseFirestore.js

import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export type ItemType = {
  key: string;
  uId: string;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
  date: string;
};

const useFirebaseFirestore = () => {
  const [initializing, setInitializing] = useState(true);
  const [data, setData] = useState([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    console.log('readData');
    firestore()
      .collection('todo-list')
      .onSnapshot(querySnapshot => {
        const items: any = [];
        querySnapshot.forEach(documentSnapshot => {
          const date = new Date(documentSnapshot.data().date);
          items.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
            date,
          });
        });
        setData(items);
      });
  };

  const deleteItem = (id: string) => {
    firestore()
      .collection('todo-list')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Item deleted!');
      });
  };

  const addItem = (item: ItemType) => {
    console.log('global.internetConnection', global.internetConnection);
    firestore()
      .collection('todo-list')
      .add(item)
      .then(() => {
        console.log('Item added!');
        navigate('Home' as never);
      });

    if (
      !global.internetConnection.isConnected ||
      !global.internetConnection.isInternetReachable
    ) {
      navigate('Home' as never);
    }
  };

  const updateItem = (item: ItemType, id: string) => {
    firestore()
      .collection('todo-list')
      .doc(id)
      .update(item)
      .then(() => {
        console.log('Item updated!');
      });
  };

  return {initializing, setInitializing, data, deleteItem, addItem, updateItem};
};

export default useFirebaseFirestore;
