import { useState } from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Game, GameOver, StartGame } from './screens';
import colors from './constants/colors';

export default function App() {
	const [loaded] = useFonts({
		'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
		'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
	});

	const [userSelection, setUserSelection] = useState<number | null>(null);
	const [currentRounds, setCurrentRounds] = useState<number>(0);

	const onStartGame = (selected: number | null) => {
		setUserSelection(selected);
	};

	const onGameOver = (rounds: number) => {
		setCurrentRounds(rounds);
	};

	const onRestart = () => {
		setUserSelection(null);
		setCurrentRounds(0);
	};

	let content = <StartGame onStartGame={onStartGame} />;
	let title = 'Welcome';

	if (userSelection && currentRounds === 0) {
		content = <Game selected={userSelection} onGameOver={onGameOver} />;
		title = "Let's Play";
	} else if (userSelection && currentRounds > 0) {
		content = (
			<GameOver
				rounds={currentRounds}
				onRestart={onRestart}
				selected={userSelection}
			/>
		);
		title = 'Game Over';
	}

	if (!loaded)
		return <ActivityIndicator size={'large'} style={styles.loader} />;

	return (
		<View style={styles.container}>
			<Header title={title} />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
