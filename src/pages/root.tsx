import { useQuery } from "@tanstack/react-query";

import { getPopularMovies } from "../utils/apiCalls";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Root() {
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  return (
    <>
      <h1>Hello world!</h1>
      {isLoading && <span>Loading...</span>}
      {/*TODO: fix ts error error*/}
      {/*@ts-ignore*/}
      {isError && <span>Error: {error.message}</span>}
      <p>{data?.status_message}</p>

      {isSuccess && (
        <Carousel
          items={data?.results.map((result) => (
            <Card
              src={
                "https://image.tmdb.org/t/p/" + "original" + result.poster_path
              }
              alt={"Poster for the movie" + result.title}
              href={"/movies/" + result.id}
              size="large"
              showStar={false}
              key={result.id}
            />
          ))}
        />
      )}
    </>
  );
}

export default Root;
