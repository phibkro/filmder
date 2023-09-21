import { useQuery } from "@tanstack/react-query";

import MovieApp from "@/features/MovieApp";
import { getPopularMovies } from "@/server/api";

function Root() {
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  if (isError) {
    console.error(error);
  }
  return (
    <>
      {isLoading && <span>...loading</span>}
      {isSuccess && <MovieApp movieListResults={data.results} />}
    </>
  );
}

export default Root;
