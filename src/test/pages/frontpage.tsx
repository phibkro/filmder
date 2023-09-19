import { useQuery } from "@tanstack/react-query";

import { useNumberStore } from "../../hooks/useNumberStore";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { getPopularMovies } from "../../utils/apiCalls";

export default function FrontpageTest() {
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    refetchOnWindowFocus: false,
  });
  const { numberStore, addToStore, removeFromStore } =
    useNumberStore("favorites");
  return (
    <>
      <main>
        <h1>Filmder</h1>
        {isLoading && <span>Loading...</span>}
        {/*TODO: fix ts error error*/}
        {/*@ts-ignore*/}
        {isError && <span>Error: {error.message}</span>}

        {isSuccess && (
          <Carousel
            items={data?.results.map((result) => (
              <Card
                src={
                  "https://image.tmdb.org/t/p/" +
                  "original" +
                  result.poster_path
                }
                alt={"Poster for the movie" + result.title}
                href={"/movies/" + result.id}
                size="large"
                onAdd={() => addToStore(result.id)}
                onRemove={() => removeFromStore(result.id)}
                showStar={false}
                key={result.id}
              />
            ))}
          />
        )}

        <ul className="filmList">
          {isSuccess &&
            data?.results.map((result) => (
              <li key={result.id}>
                <Card
                  src={
                    "https://image.tmdb.org/t/p/" +
                    "original" +
                    result.poster_path
                  }
                  alt={"Poster for the movie" + result.title}
                  href={"/movies/" + result.id}
                  size="medium"
                  onAdd={() => addToStore(result.id)}
                  onRemove={() => removeFromStore(result.id)}
                  favorited={numberStore.includes(result.id)}
                />
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
