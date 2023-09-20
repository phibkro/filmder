import { Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  src: string;
  alt: string;
  href?: string;
  favorited?: boolean;
  showStar?: boolean;
  size?: "small" | "medium" | "large";
  onAdd?: () => void;
  onRemove?: () => void;
}
export default function Card({
  src,
  alt,
  href,
  favorited = false,
  showStar = true,
  size = "medium",
  // Need fallback functions for them to be optional
  onAdd = () => {
    // console.log("card favorited");
  },
  onRemove = () => {
    // console.log("card unfavorited");
  },
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
    <div className={href ? "cardhover card" : "card"}>
      {href ? (
        <Link to={href}>
          <img src={src} alt={alt} width={imgWidth} />
        </Link>
      ) : (
        <img src={src} alt={alt} width={imgWidth} />
      )}

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
