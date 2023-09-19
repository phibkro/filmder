import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";
import { MovieListResult } from "../utils/types";

interface CarouselProps {
  results: MovieListResult[];
}
export default function Carousel({ results }: CarouselProps) {
  // Displays results using currentResult as index
  const [currentResult, setCurrentResult] = useState(0);
  function incrementCurrentResult() {
    if (currentResult === results.length - 1) {
      setCurrentResult(0);
    } else {
      setCurrentResult(currentResult + 1);
    }
  }
  function decrementCurrentResult() {
    if (currentResult === 0) {
      setCurrentResult(results.length - 1);
    } else {
      setCurrentResult(currentResult - 1);
    }
  }
  return (
    <div className="carousel">
      <ChevronLeft
        size={"3.5em"}
        className="hover"
        onClick={decrementCurrentResult}
      />
      <Card
        href={"/movies/" + results[currentResult].id}
        size="large"
        result={results[currentResult]}
        showStar={false}
      />
      <ChevronRight
        size={"3.5em"}
        className="hover"
        onClick={incrementCurrentResult}
      />
    </div>
  );
}
