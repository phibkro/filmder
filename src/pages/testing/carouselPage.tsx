import Carousel from "../../components/Carousel";
import data from "../../data/mock.json";

export default function CarouselPage() {
  return <Carousel results={data.results} />;
}
