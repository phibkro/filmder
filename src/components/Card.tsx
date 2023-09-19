import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps {
  src: string;
  alt: string;
  href: string;
  onAdd: () => void;
  onRemove: () => void;
  favorited?: boolean;
  showStar?: boolean;
  size?: "small" | "medium" | "large";
}
export default function Card({
  src,
  alt,
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
        <img src={src} alt={alt} width={imgWidth} />
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
