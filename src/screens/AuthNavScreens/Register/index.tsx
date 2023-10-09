/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StatusBar,
  Text as RNText,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import ScreenView from '../../../components/ScreenView';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../themes/theme';
import FlexView from '../../../components/FlexView';
import LottieView from 'lottie-react-native';
import Text from '../../../components/Text';
import {Texts} from '../../../common/enums';
import Button from '../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/TextInput';
import View from '../../../components/View';
import {useNavigation} from '@react-navigation/native';
import useFirebaseAuth from '../../../hooks/useFirebaseAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email(Texts.email_check).required(Texts.email_required),
  password: Yup.string()
    .min(8, Texts.password_check)
    .required(Texts.password_required),
});

const Register = () => {
  const {navigate} = useNavigation();
  const [showPass, setShowPass] = useState<boolean>(false);
  const source = showPass
    ? require('./../../../assets/images/show-pass.png')
    : require('./../../../assets/images/hide-pass.png');
  const lottieSource = require('./../../../assets/lottie-files/todo-animation.json');
  const {initializing, registerUser} = useFirebaseAuth();
  return (
    <ScreenView>
      <StatusBar hidden={false} />
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.white]}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <FlexView flex={0.35} justifyContent="center" alignItems="center">
            <LottieView
              style={{width: '75%', height: '75%'}}
              source={lottieSource}
              autoPlay
              loop
            />
          </FlexView>
          <ScrollView
            scrollEnabled={false}
            style={{flex: 1, width: '100%'}}
            keyboardShouldPersistTaps="handled">
            <FlexView flex={0.4} alignItems="left" pH={24}>
              <Text label={Texts.register_title} variant="title1" />
              <Text label={Texts.register_description} variant="body1" />
              <View marginTop={24} />
              <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={values => console.log(values)}>
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                  <>
                    <TextInput
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder={Texts.login_enter_email}
                    />
                    <View height={30} width={'100%'}>
                      {errors.email && <RNText>{errors.email}</RNText>}
                    </View>
                    <View width={'100%'} flexDirection="row">
                      <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={Texts.login_enter_pass}
                        secureTextEntry={!showPass}
                      />
                      <Pressable
                        onPress={() => setShowPass(!showPass)}
                        style={{
                          position: 'absolute',
                          right: 12,
                          alignSelf: 'center',
                        }}>
                        <Image
                          source={source}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                      </Pressable>
                    </View>
                    <View height={30} width={'100%'}>
                      {errors.password && <RNText>{errors.password}</RNText>}
                    </View>
                    <Button
                      disabled={initializing}
                      onPress={() => {
                        handleSubmit();
                        if (values.email !== '' && values.password !== '') {
                          registerUser(values.email, values.password);
                          return;
                        }
                      }}
                      width={'100%'}
                      height={55}
                      borderRadius={12}
                      backgroundColor={theme.colors.secondary}
                      textColor={'white'}
                      text={Texts.register_button}
                      variant={'button1'}
                      marginTop={12}
                    />
                    <View
                      bottom={-50}
                      position="relative"
                      height={50}
                      flexDirection="row"
                      width={'100%'}>
                      <Text
                        label={Texts.register_already_have_acc}
                        variant="body2"
                      />
                      <Pressable onPress={() => navigate('Login' as never)}>
                        <Text
                          label={Texts.register_loginto}
                          variant="body2Bold"
                        />
                      </Pressable>
                    </View>
                  </>
                )}
              </Formik>
            </FlexView>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ScreenView>
  );
};

export default Register;
