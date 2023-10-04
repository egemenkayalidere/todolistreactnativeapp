/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button: FC<{
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  textColor: string;
  fontWeight: any;
  text: string;
}> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  textColor,
  fontWeight,
  text,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        width,
        height,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: textColor, fontWeight}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
