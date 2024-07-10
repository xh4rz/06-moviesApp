import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	const { isloading, nowPlaying, popular, topRated, upcoming } = useMovies();

	if (isloading) {
		return <Text>Cargando...</Text>;
	}

	return (
		<ScrollView>
			<View style={{ marginTop: top + 20, paddingBottom: 30 }}>
				<PosterCarousel movies={nowPlaying} />
				<HorizontalCarousel
					movies={popular}
					title="Populares"
					loadNextPage={() => console.log('Fin alcanzado')}
				/>
				<HorizontalCarousel movies={topRated} title="Mejor calificadas" />
				<HorizontalCarousel movies={upcoming} title="Próximamente" />
			</View>
		</ScrollView>
	);
};
