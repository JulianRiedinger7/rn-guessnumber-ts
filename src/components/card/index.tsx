import { View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { styles } from './styles';

interface Props {
	children: ReactNode;
	style: object;
}

const Card: FC<Props> = ({ style, children }) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;
