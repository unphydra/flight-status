import FlightDetail from "../components/flightDetail";
import Loader from "../components/loader";
import { useGetFlightDetail } from "../hooks";

export default function FlightDetailsContainer({ id }: { id: string }) {
  const { data: flightDetail, loading, error } = useGetFlightDetail(id);

  if (loading && !flightDetail) {
    return <Loader />;
  }

  if (error) {
    throw error;
  }
  return flightDetail && <FlightDetail flightDetail={flightDetail} />;
}
