import { MovieResult } from "../utils/types";

interface CardProps {
  result: MovieResult;
  imageSize: PosterSize;
}
type PosterSize = "original" | "w300" | "w780" | "w1280";
export default function Card({ result, imageSize }: CardProps) {
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/" + imageSize + result.poster_path}
        alt={"Poster for the movie" + result.title}
        width={300}
      />
    </div>
  );
}
