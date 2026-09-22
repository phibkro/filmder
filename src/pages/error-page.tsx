import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Unknown error";

  return (
    <div id="error-page">
      <h1>Error</h1>
      <p>An unexpected error occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}
