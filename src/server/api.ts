import { useQuery } from "@tanstack/react-query";

// The production Worker serves both the app and the credential-bearing
// TMDB proxy. Same-origin requests keep the upstream token out of the
// browser and avoid a second public deployment surface.
const TMDB_PROXY = "/api/tmdb";

export async function getPopularMovies() {
  const response = await fetch(`${TMDB_PROXY}/3/movie/popular`, {
    method: "GET",
    headers: { accept: "application/json" },
  });
  return response.json();
}
export async function getMovieById(movieId: string | undefined) {
  const response = await fetch(
    `${TMDB_PROXY}/3/movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: { accept: "application/json" },
    },
  );
  return response.json();
}
export async function usePopularMovies() {
  return useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    refetchOnWindowFocus: false,
  });
}
export async function useMovieById(movieId: string | undefined) {
  return useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
  });
}
