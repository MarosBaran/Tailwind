import { useRouteError } from "react-router-dom";
import Navigation from "../components/Navigation";

import HomePageContent from "../components/HomePageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Navigation />
      <div className="mt-2">
        <h1 className="text-center font-mono text-3xl">{title}</h1>
        <p className="text-center"> {message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
