import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { styles } from './styles';
import { Card } from '../../components';

interface Props {
	rounds: number;
	onRestart: () => void;
	selected: number | null;
}

const GameOver: FC<Props> = ({ rounds, selected, onRestart }) => {
	const [isPortrait, setIsPortrait] = useState<boolean>(true);

	const onPortrait = () => {
		const dim = Dimensions.get('screen');
		return dim.height >= dim.width;
	};

	useEffect(() => {
		const suscription = Dimensions.addEventListener('change', () => {
			setIsPortrait(onPortrait);
		});

		return () => {
			suscription.remove();
		};
	});

	return (
		<View style={styles.container}>
			<Card style={isPortrait ? styles.card : styles.cardLandscape}>
				<Image
					source={{
						uri: 'https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg?w=2000',
					}}
					style={styles.image}
				/>
				<View>
					<Text style={styles.title}>
						You have chosen the number {selected}
					</Text>
					<Text style={styles.title}>{rounds} rounds has been played</Text>
					<TouchableOpacity style={styles.button} onPress={onRestart}>
						<Text style={styles.buttonText}>Restart</Text>
					</TouchableOpacity>
				</View>
			</Card>
		</View>
	);
};

export default GameOver;
