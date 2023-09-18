import { useQuery } from "@tanstack/react-query";

import { useNumberStore } from "../../hooks/useNumberStore";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { getPopularMovies } from "../../utils/apiCalls";

export default function FrontpageTest() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    refetchOnWindowFocus: false,
  });
  const { numberStore, addToStore, removeFromStore } =
    useNumberStore("favorites");
  console.log(data);
  return (
    <>
      <main>
        <h1>Filmder</h1>
        {isLoading && <span>Loading...</span>}
        {/*TODO: fix ts error error*/}
        {/*@ts-ignore*/}
        {isError && <span>Error: {error.message}</span>}

        {data && <Carousel results={data?.results} />}

        <ul className="filmList">
          {data &&
            data?.results.map((result) => (
              <li key={result.id}>
                <Card
                  href={"/movies/" + result.id}
                  size="medium"
                  result={result}
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
