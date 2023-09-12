import { MovieResult } from "../utils/types";
import Card from "./Card";
interface CarouselProps {
  results: MovieResult[];
}
export default function Carousel({ results }: CarouselProps) {
  return (
    <div className="carousel">
      <Card imageSize="w1280" result={results[currentResult]} />
    </div>
  );
}
