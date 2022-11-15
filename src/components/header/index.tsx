import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

interface Props {
	title: string;
}

const Header: FC<Props> = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
