import * as React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

export interface inputProps {
  text?: string;
  icon: string;
  placeholder: string;
  password?: boolean;
  onChangeText(text: string): void;
  onBlur(text: any): void;
}

export function input(props: inputProps) {
  return (
    <View>
      {props.text && <Text style={styles.text}>{props.text}</Text>}
      <Input
        placeholder={props.placeholder}
        leftIcon={{ name: props.icon, color: 'white' }}
        placeholderTextColor="white"
        inputContainerStyle={styles.containerInput}
        onChangeText={(text) => props.onChangeText(text)}
        secureTextEntry={props.password}
        onBlur={props.onBlur}
      />
    </View>
  );
}

export default input