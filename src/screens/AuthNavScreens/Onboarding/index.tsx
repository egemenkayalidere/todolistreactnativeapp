/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ScreenView from '../../../components/ScreenView';
import {StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {theme} from '../../../themes/theme';
import Button from '../../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../../components/Text';
import {Texts} from '../../../common/enums';
import FlexView from '../../../components/FlexView';
import {useNavigation} from '@react-navigation/native';
import {AuthPaths} from '../../../navigation/paths/auth.paths';

const Onboarding = () => {
  const {navigate} = useNavigation();
  const onPress_LetsStart = () => navigate(AuthPaths.Login as never);
  return (
    <ScreenView>
      <StatusBar hidden />
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.white]}
        style={{flex: 1}}>
        <FlexView flex={0.5} justifyContent="center" alignItems="center">
          <LottieView
            style={{width: '100%', height: '100%'}}
            source={require('./../../../assets/lottie-files/todo-animation.json')}
            autoPlay
            loop
          />
        </FlexView>
        <FlexView flex={0.3} alignItems="center" pH={48}>
          <Text
            color="darkGrey"
            label={Texts.on_boarding_title}
            variant="title1"
          />
          <Text
            color="darkGrey"
            label={Texts.on_boarding_description}
            variant="body1"
            style={{marginTop: 12, textAlign: 'center'}}
          />
        </FlexView>
        <FlexView flex={0.2} justifyContent="center" alignItems="center">
          <Button
            onPress={onPress_LetsStart}
            width={350}
            height={50}
            borderRadius={12}
            backgroundColor={theme.colors.primary}
            textColor={'white'}
            text={Texts.on_boarding_button}
            variant={'button1'}
          />
        </FlexView>
      </LinearGradient>
    </ScreenView>
  );
};

export default Onboarding;
