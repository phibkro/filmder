export async function getPopularMovies() {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_READ_ACCESS_TOKEN,
    },
  });
  const data = response.json();
  return data;
}
export async function getMovieById(movieId: string | undefined) {
  if (movieId === undefined) {
    return Promise.reject("movieId is undefined");
  }
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      movieId.toString() +
      "?language=en-US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_READ_ACCESS_TOKEN,
      },
    }
  );
  const data = response.json();
  return data;
}
