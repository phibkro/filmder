import { useQuery } from "@tanstack/react-query";

import { getPopularMovies } from "../server/api";
import MovieApp from "../features/MovieApp";

function Root() {
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  if (isError) {
    console.log(error);
  }
  return (
    <>
      {isLoading && <span>...loading</span>}
      {isSuccess && <MovieApp movieListResults={data.results} />}
    </>
  );
}

export default Root;
