import { useQuery } from "@tanstack/react-query";

import Carousel from "../components/Carousel";
import { getPopularMovies } from "../utils/apiCalls";
import Card from "../components/Card";
import MovieList from "../components/MovieList";

function Root() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  console.log(data);
  return (
    <>
      <h1>Hello world!</h1>
      {isLoading && <span>Loading...</span>}
      {/*TODO: fix ts error error*/}
      {/*@ts-ignore*/}
      {isError && <span>Error: {error.message}</span>}
      <p>{data?.status_message}</p>

      {data && <Carousel results={data?.results} />}

      {data && <MovieList results={data?.results} />}
    </>
  );
}

export default Root;
