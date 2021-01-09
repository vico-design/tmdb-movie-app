const API_KEY = "1cbcb64c17acb19db80ea5084e209e62";

const genresMovies = [
  {
    title: "Trending Now",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLargeRow: true,
  },
  {
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default genresMovies;
