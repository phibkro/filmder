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
      <div className="cardHolder">
        {numberStore.map((id) => {
          return (
            <Card href={"/movies/" + id} size={"small"} showStar={false} />
          );
        })}
      </div>
    </div>
  );
}
export default MovieList;
