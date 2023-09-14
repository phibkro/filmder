import { useState } from "react";
import { MovieResult } from "../utils/types";

interface CardProps {
  result: MovieResult;
  imageSize: BackdropSizes;
}
type BackdropSizes = "original" | "w300" | "w780" | "w1280";
export default function Card({
  result,
  imageSize,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  function toggleFavorite() {
      setIsFavorite(!isFavorite);
  }
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/" + imageSize + result.poster_path}
        alt={"Poster for the movie" + result.title}
        width={300}
      />
      <p onClick={toggleFavorite}>
        {isFavorite && "unfavourite"}
        {!isFavorite && "favorite"}
      </p>
    </div>
  );
}
