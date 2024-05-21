import FlightTable from "../components/flightTable";
import Loader from "../components/loader";
import { useGetFlightList } from "../hooks";

export default function FlightListContainer() {
  const { data: flights, loading, error } = useGetFlightList();

  if (loading && !flights) {
    return <Loader />;
  }

  if (error) {
    throw error;
  }
  return <FlightTable flights={flights} />;
}
