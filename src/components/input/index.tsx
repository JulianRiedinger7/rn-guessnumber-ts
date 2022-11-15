import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ style, ...props }: any) => {
	return <TextInput {...props} style={{ ...styles.container, ...style }} />;
};

export default Input;
