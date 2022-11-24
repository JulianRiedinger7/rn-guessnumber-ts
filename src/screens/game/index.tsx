import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { styles } from './styles';
import { Card, NumberContainer } from '../../components';

interface Props {
	selected: number | null;
	onGameOver: (rounds: number) => void;
}

const generateRandomNumber = (
	max: number,
	min: number,
	exclude: number | null
): number => {
	const random = Math.floor(Math.random() * (max - min) + min);
	if (random === exclude) return generateRandomNumber(max, min, exclude);

	return random;
};

const Game: FC<Props> = ({ selected, onGameOver }) => {
	const [currentGuess, setCurrentGuess] = useState<number>(
		generateRandomNumber(100, 1, selected)
	);
	const [rounds, setRounds] = useState<number>(0);
	const currentHigh = useRef(100);
	const currentLow = useRef(1);

	const onHandleGuess = (direction: string) => {
		if (selected) {
			if (
				(direction === 'lower' && currentGuess < selected) ||
				(direction === 'greater' && currentGuess > selected)
			)
				return Alert.alert("Don't Lie!", "You know that this isn't true!", [
					{ text: 'Sorry!' },
				]);

			if (direction === 'lower') {
				currentHigh.current = currentGuess;
			} else {
				currentLow.current = currentGuess;
			}

			const random = generateRandomNumber(
				currentHigh.current,
				currentLow.current,
				currentGuess
			);
			setCurrentGuess(random);
			setRounds((prevRounds) => prevRounds + 1);
		}
	};

	useEffect(() => {
		if (currentGuess === selected) {
			onGameOver(rounds);
		}
	}, [selected, currentGuess, onGameOver]);

	return (
		<View style={styles.container}>
			<Card style={styles.cardContainer}>
				<Text style={styles.cardTitle}>Opponent's Guess: </Text>
				<NumberContainer number={currentGuess} />

				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.lowerButton}
						onPress={() => onHandleGuess('lower')}
					>
						<Text style={styles.lowerText}>Lower</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.greaterButton}
						onPress={() => onHandleGuess('greater')}
					>
						<Text style={styles.greaterText}>Greater</Text>
					</TouchableOpacity>
				</View>
			</Card>
		</View>
	);
};

export default Game;
