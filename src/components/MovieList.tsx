import React from "react";
import { MovieResult } from "../utils/types";
import Card from "./Card";
import { useNumberStore } from "../hooks/useNumberStore";
import useMockResults from "../hooks/useMockResults";

function MovieList(favorites: MovieResult[]) {
  const [numberStore, removeFromStore] = useNumberStore("favorites");
  console.log("OIII" + numberStore);

  return (
    <div>
      <h2>Min liste</h2>
      {/* Box that maps each restult to a Card */}
      <div className="cardHolder"></div>
    </div>
  );
}

/*
{favorites.map((movie) => {
          return (
            <Card
              href={"/movies/" + movie.id}
              size="small"
              result={movie}
              showStar={false}
            />
          );
        })}
        */
export default MovieList;
