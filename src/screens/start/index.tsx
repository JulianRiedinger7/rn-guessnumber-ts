import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card, Input } from '../../components';

const StartGame = () => {
	const [number, setNumber] = useState<string>('');

	const onHandleChange = (value: string) => {
		setNumber(value.replace(/[^0-9]/g, ''));
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Card style={styles.cardContainer}>
					<Text style={styles.title}>Start Game</Text>
					<Text style={styles.label}>Enter a number</Text>
					<Input
						placeholder="0"
						style={styles.input}
						maxLength={2}
						keyboardType="numeric"
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={onHandleChange}
						value={number}
					/>

					<View style={styles.buttonsContainer}>
						<TouchableOpacity style={styles.reset}>
							<Text style={{ color: colors.white, fontWeight: '700' }}>
								Reset
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.confirm}>
							<Text style={{ color: colors.text, fontWeight: '700' }}>
								Confirm
							</Text>
						</TouchableOpacity>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
