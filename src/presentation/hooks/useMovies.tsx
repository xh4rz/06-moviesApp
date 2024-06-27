import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
	const [isloading, setIsloading] = useState(true);

	const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

	const [popular, setPopular] = useState<Movie[]>([]);

	const [topRated, setTopRated] = useState<Movie[]>([]);

	const [upcoming, setUpComing] = useState<Movie[]>([]);

	useEffect(() => {
		initialLoad();
	}, []);

	const initialLoad = async () => {
		const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);

		const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

		const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);

		const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

		const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
			await Promise.all([
				nowPlayingPromise,
				popularPromise,
				topRatedPromise,
				upcomingPromise
			]);

		setNowPlaying(nowPlayingMovies);
		setPopular(popularMovies);
		setTopRated(topRatedMovies);
		setUpComing(upcomingMovies);

		setIsloading(false);
	};

	return {
		isloading,
		nowPlaying,
		popular,
		topRated,
		upcoming
	};
};
