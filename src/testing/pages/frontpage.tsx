import { useQuery } from "@tanstack/react-query";

import { useNumberStore } from "../../hooks/useNumberStore";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

export default function FrontpageTest() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
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
    },
    refetchOnWindowFocus: false,
  });
  const [numberStore, addToStore, removeFromStore] =
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
        {data && <p>{data?.status_message}</p>}

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
