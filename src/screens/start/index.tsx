import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card, Input } from '../../components';

const StartGame = () => {
	const [number, setNumber] = useState<string>('');
	const [confirmed, setConfirmed] = useState<boolean>(false);
	const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

	const onHandleChange = (value: string) => {
		setNumber(value.replace(/[^0-9]/g, ''));
	};

	const onHandleReset = () => {
		setNumber('');
		setConfirmed(false);
	};

	const onHandleConfirm = () => {
		const chosenNumber = +number;

		if (number === '' || chosenNumber <= 0 || chosenNumber > 99)
			return Alert.alert('Error', 'Please enter a valid number', [
				{ text: 'OK', onPress: onHandleReset },
			]);

		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setNumber('');
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
						<TouchableOpacity style={styles.reset} onPress={onHandleReset}>
							<Text style={{ color: colors.white, fontWeight: '700' }}>
								Restart
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.confirm} onPress={onHandleConfirm}>
							<Text style={{ color: colors.text, fontWeight: '700' }}>
								Confirm
							</Text>
						</TouchableOpacity>
					</View>
				</Card>

				{confirmed ? (
					<Card style={styles.selectionContainer}>
						<Text style={styles.selectionTitle}>You selected: </Text>
						<Text style={styles.selectedNumber}>{selectedNumber}</Text>
						<TouchableOpacity style={styles.startButton}>
							<Text style={styles.startText}>Start Game</Text>
						</TouchableOpacity>
					</Card>
				) : null}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
