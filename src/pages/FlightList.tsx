import ErrorBoundary from "../components/error/ErrorBoundary";
import ErrorCard from "../components/error/ErrorCard";
import FlightListContainer from "../containers/FlightList";

export default function FlightsList() {
  const title = "Something went wrong!";
  const description =
    "We are sorry, but we are unable to load the flight list. Please try again later.";

  return (
    <ErrorBoundary
      fallback={<ErrorCard title={title} description={description} />}
    >
      <FlightListContainer />
    </ErrorBoundary>
  );
}
