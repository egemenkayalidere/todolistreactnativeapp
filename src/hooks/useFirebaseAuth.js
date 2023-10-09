/* eslint-disable react-hooks/exhaustive-deps */
// useFirebaseAuth.js

import {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {Texts} from '../common/enums';

const useFirebaseAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = currentUser => {
    setUser(currentUser);
    setTimeout(() => {
      setInitializing(false);
    }, 3000);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const registerUser = async (email, password) => {
    try {
      setInitializing(false);
      setInitializing(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Toast.show({
            type: 'success',
            text1: Texts.success_title_registration_success,
            text2: Texts.success_msg_registration_success,
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show({
              type: 'error',
              text1: Texts.error_title_registration_failed,
              text2: Texts.error_msg_email_in_use,
            });
          }

          if (error.code === 'auth/invalid-email') {
            Toast.show({
              type: 'error',
              text1: Texts.error_title_registration_failed,
              text2: Texts.error_msg_invalid_email,
            });
          }

          console.error(error);
        });
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    } finally {
      setTimeout(() => {
        setInitializing(false);
      }, 2000);
    }
  };

  const signOut = async () => {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (error) {}
  };

  const signIn = async (email, password) => {
    try {
      setInitializing(false);
      setInitializing(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error('Error signing in:', error);
      Toast.show({
        type: 'error',
        text1: Texts.error_title_login_failed,
        text2: error.code,
      });
      throw error;
    } finally {
      setTimeout(() => {
        setInitializing(false);
      }, 2000);
    }
  };

  return {user, initializing, registerUser, signOut, signIn, setInitializing};
};

export default useFirebaseAuth;
