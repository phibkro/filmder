import MovieOverview from "@/components/MovieOverview";
import { getMovieById } from "@/server/api";
import "@/styles/overview.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {isLoading && <span>...loading</span>}
      {isSuccess && <MovieOverview movieDetails={data} />}
    </>
  );
}
