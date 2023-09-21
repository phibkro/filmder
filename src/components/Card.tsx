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

  return (
    <div
      className={`${href ? "hover" : ""}
      card`}
    >
      {href ? (
        <Link to={href}>
          <img src={src} alt={alt} className={size} />
        </Link>
      ) : (
        <img src={src} alt={alt} className={size} />
      )}

      {showStar && (
        <Star
          size={"100%"}
          className={`${isFavorite ? "fill" : ""}
          ${size} 
          hover star `}
          onClick={toggleFavorite}
        />
      )}
    </div>
  );
}
