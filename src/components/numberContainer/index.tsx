import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

interface Props {
	number: number | null;
}

const NumberContainer: FC<Props> = ({ number }) => (
	<Text style={styles.number}>{number}</Text>
);

export default NumberContainer;
