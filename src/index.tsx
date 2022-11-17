import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { Game, StartGame } from './screens';

export default function App() {
	const [userSelection, setUserSelection] = useState<number | null>(null);

	const onStartGame = (selected: number | null) => {
		setUserSelection(selected);
	};

	return (
		<View style={styles.container}>
			<Header title={userSelection ? "Let's Play" : 'Welcome'} />
			{userSelection ? (
				<Game selected={userSelection} />
			) : (
				<StartGame onStartGame={onStartGame} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
});
