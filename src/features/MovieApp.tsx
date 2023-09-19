import { useState } from "react";
import { useBoolean } from "../hooks/useBoolean";
import { useNumberStore } from "../hooks/useNumberStore";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { MovieListResult } from "../utils/types";

interface MovieAppProps {
  movieListResults: MovieListResult[];
}
function MovieApp({ movieListResults }: MovieAppProps) {
  const { numberStore, addToStore, removeFromStore } =
    useNumberStore("favorites");
  const [isFavoritesVisible, toggleIsFavoritesVisible] =
    useBoolean("isfavoritesvisible");
  const [results, setResults] = useState(
    isFavoritesVisible
      ? movieListResults
      : movieListResults.filter((result) => numberStore.includes(result.id)),
  );
  const handleFavorites = () => {
    if (isFavoritesVisible) {
      setResults(movieListResults);
    } else {
      setResults(
        movieListResults.filter((result) => numberStore.includes(result.id)),
      );
    }
    toggleIsFavoritesVisible();
  };
  return (
    <>
      <main>
        <h1>Filmder</h1>
        <Carousel
          items={movieListResults.map((result) => (
            <Card
              src={
                "https://image.tmdb.org/t/p/" + "original" + result.poster_path
              }
              alt={"Poster for the movie" + result.title}
              href={"movies/" + result.id}
              size="large"
              onAdd={() => addToStore(result.id)}
              onRemove={() => removeFromStore(result.id)}
              showStar={false}
              key={result.id}
            />
          ))}
        />
        <button onClick={handleFavorites}>
          {isFavoritesVisible && "hide "}
          {!isFavoritesVisible && "show "}
          favorites
        </button>
        <ul className="filmList">
          {results.map((result) => (
            <li key={result.id}>
              <Card
                src={
                  "https://image.tmdb.org/t/p/" +
                  "original" +
                  result.poster_path
                }
                alt={"Poster for the movie" + result.title}
                href={"movies/" + result.id}
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

export default MovieApp;
