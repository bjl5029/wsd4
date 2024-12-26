import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const fetchFeaturedMovie = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
        console.log(response.data.results[0]);
        return response.data.results[0];
    } catch (error) {
        console.error('Error fetching featured movie:', error);
    }
}

const getURL4PopularMovies = (page: number=1) => {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

const getURL4ReleaseMovies = (page: number=2) => {
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

const getURL4GenreMovies = (genre: string, page: number = 1) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${page}`;
}

export { fetchFeaturedMovie, getURL4PopularMovies, getURL4ReleaseMovies, getURL4GenreMovies };
