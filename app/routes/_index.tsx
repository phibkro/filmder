import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/router";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "~/api";
import MovieApp from "~/components/MovieApp";

export async function loader() {
  const popularMovies = await getPopularMovies();
  return json({ popularMovies });
}
export default function Index() {
  const { popularMovies } = useLoaderData<typeof loader>();

  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    initialData: popularMovies,
  });

  return (
    <>
      {isError && <span>{error.message}</span>}
      {isLoading && <span>...loading</span>}
      {isSuccess && <MovieApp movieListResults={data.results} />}
    </>
  );
}
