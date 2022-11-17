import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import React, { FC, useState } from 'react';
import { styles } from './styles';
import colors from '../../constants/colors';
import { Card, Input, NumberContainer } from '../../components';

interface Props {
	onStartGame: (selected: number | null) => void;
}

const StartGame: FC<Props> = ({ onStartGame }) => {
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

		Keyboard.dismiss();
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
						<NumberContainer number={selectedNumber} />
						<TouchableOpacity
							style={styles.startButton}
							onPress={() => onStartGame(selectedNumber)}
						>
							<Text style={styles.startText}>Start Game</Text>
						</TouchableOpacity>
					</Card>
				) : null}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
