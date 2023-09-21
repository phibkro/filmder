import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselProps {
  items: JSX.Element[];
}
export default function Carousel({ items }: CarouselProps) {
  // Displays results using currentResult as index
  const [index, setIndex] = useState(0);
  function incrementIndex() {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function decrementIndex() {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div className="carousel">
      <ChevronLeft
        size={"100%"}
        className="hover chevron"
        onClick={decrementIndex}
      />
      {items[index]}
      <ChevronRight
        size={"100%"}
        className="hover chevron"
        onClick={incrementIndex}
      />
    </div>
  );
}
