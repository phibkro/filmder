import { useState } from "react";
import { MovieResult } from "../utils/types";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps {
  result: MovieResult;
  href: string;
  onAdd: () => void;
  onRemove: () => void;
  favorited?: boolean;
  showStar?: boolean;
  size?: "small" | "medium" | "large";
}
export default function Card({
  result,
  href,
  onAdd,
  onRemove,
  favorited = false,
  showStar = true,
  size = "medium",
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(favorited);
  function toggleFavorite() {
    if (isFavorite) {
      onRemove();
    } else {
      onAdd();
    }
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  }
  let imgWidth = 200;
  let starSize = "3.5em";
  switch (size) {
    case "small":
      imgWidth = 125;
      starSize = "1.5em";
      break;
    case "medium":
      imgWidth = 225;
      starSize = "2.5em";
      break;
    case "large":
      imgWidth = 325;
      starSize = "3.5em";
      break;
  }
  return (
    <div className="card">
      <Link to={href}>
        <img
          src={"https://image.tmdb.org/t/p/" + "original" + result.poster_path}
          alt={"Poster for the movie" + result.title}
          width={imgWidth}
        />
      </Link>

      {showStar && (
        <Star
          size={starSize}
          className={isFavorite ? "fill hover star" : "hover star"}
          onClick={toggleFavorite}
        />
      )}
    </div>
  );
}
