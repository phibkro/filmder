import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_API_READ_ACCESS_TOKEN,
          },
        }
      );
      const data = response.json();
      return data;
    },
    refetchOnWindowFocus: false,
  });
  return <>{data && <p>{JSON.stringify(data)}</p>}</>;
}
