import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { useNumberStore } from "@/hooks/useNumberStore";
import { useText } from "@/hooks/useText";
import { createPosterUrl } from "@/utils/lib";
import { MovieListResult } from "@/utils/types";
import { useState } from "react";

interface MovieAppProps {
  movieListResults: MovieListResult[];
}
export default function MovieApp({ movieListResults }: MovieAppProps) {
  const { numberStore, addToStore, removeFromStore } =
    useNumberStore("favorites");
  const [show, setShow] = useText("show", "all");
  const [results, setResults] = useState(() => {
    switch (show) {
      case "all":
        return movieListResults;
      case "favorites":
        return movieListResults.filter((result) =>
          numberStore.includes(result.id),
        );
      case "no-favorites":
        return movieListResults.filter(
          (result) => !numberStore.includes(result.id),
        );
      default:
        return movieListResults;
    }
  });
  const selectOptions = [
    {
      value: "all",
      label: "show all",
    },
    {
      value: "no-favorites",
      label: "hide favorites",
    },
    {
      value: "favorites",
      label: "show only favorites",
    },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log("handlechange");
    switch (e.target.value) {
      case "all":
        setResults(movieListResults);
        setShow("all");
        // console.log("all");
        break;
      case "favorites":
        setResults(
          movieListResults.filter((result) => numberStore.includes(result.id)),
        );
        setShow("favorites");
        // console.log("favorites");
        break;
      case "no-favorites":
        setResults(
          movieListResults.filter((result) => !numberStore.includes(result.id)),
        );
        setShow("no-favorites");
        // console.log("no-favorites");
        break;
      default:
        setResults(movieListResults);
        setShow("all");
        // console.log("default");
        break;
    }
  };
  return (
    <>
      <main>
        <Carousel
          items={movieListResults.map((result) => (
            <Card
              src={createPosterUrl(result.poster_path)}
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
        <select
          name="filmList"
          id="filmList"
          defaultValue={show}
          onChange={(e) => handleChange(e)}
        >
          {selectOptions.map(({ value, label }, i) => (
            <option value={value} key={i}>
              {label}
            </option>
          ))}
        </select>
        <ul className="filmList">
          {results.map((result) => (
            <li key={result.id}>
              <Card
                src={createPosterUrl(result.poster_path)}
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
