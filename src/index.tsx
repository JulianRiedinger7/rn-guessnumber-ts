import { useState } from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Game, StartGame } from './screens';
import colors from './constants/colors';

export default function App() {
	const [loaded] = useFonts({
		'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
		'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
	});

	const [userSelection, setUserSelection] = useState<number | null>(null);

	const onStartGame = (selected: number | null) => {
		setUserSelection(selected);
	};

	if (!loaded)
		return <ActivityIndicator size={'large'} style={styles.loader} />;

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
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
