import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import { styles } from './styles';
import { Card, NumberContainer } from '../../components';

interface Props {
	selected: number | null;
}

const generateRandomNumber = (exclude: number | null): number => {
	const random = Math.floor(Math.random() * (100 - 1) + 1);
	if (random === exclude) return generateRandomNumber(exclude);

	return random;
};

const Game: FC<Props> = ({ selected }) => {
	const [currentGuess, setCurrentGuess] = useState<number>(
		generateRandomNumber(selected)
	);

	return (
		<View style={styles.container}>
			<Card style={styles.cardContainer}>
				<Text style={styles.cardTitle}>Opponent's Guess: </Text>
				<NumberContainer number={currentGuess} />

				<View style={styles.buttonsContainer}>
					<TouchableOpacity style={styles.lowerButton}>
						<Text style={styles.lowerText}>Lower</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.greaterButton}>
						<Text style={styles.greaterText}>Greater</Text>
					</TouchableOpacity>
				</View>
			</Card>
		</View>
	);
};

export default Game;