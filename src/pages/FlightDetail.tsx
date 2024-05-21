import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBoundary from "../components/error/ErrorBoundary";
import ErrorCard from "../components/error/ErrorCard";
import FlightDetailsContainer from "../containers/FlightDetail";

export default function FlightDetail() {
  const title = "Something went wrong!";
  const description =
    "We are sorry, but we are unable to load the flight Details. Please try again later.";

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  const ErrorComponent = (
    <ErrorCard
      title={title}
      description={description}
      ActionComponent={() => (
        <Button onClick={handleOnClick}>Go to Home</Button>
      )}
    />
  );
  if (!id) {
    return ErrorComponent;
  }

  return (
    <ErrorBoundary fallback={ErrorComponent}>
      <FlightDetailsContainer id={id} />
    </ErrorBoundary>
  );
}
