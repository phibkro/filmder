import { useQuery } from "@tanstack/react-query";

import Carousel from "../components/Carousel";

function Root() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
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
  });
  console.log(data);
  return (
    <>
      <h1>Hello world!</h1>
      {isLoading && <span>Loading...</span>}
      {/*TODO: fix ts error error*/}
      {/*@ts-ignore*/}
      {isError && <span>Error: {error.message}</span>}
      <p>{data?.status_message}</p>

      {data && <Carousel results={data?.results} />}
    </>
  );
}

export default Root;
