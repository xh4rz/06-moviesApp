import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
	baseUrl: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: '8f65c332bd8dd6565881e37d267ec73e',
		language: 'es'
	}
});
