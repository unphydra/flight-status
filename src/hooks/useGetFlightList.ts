import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import FlightApi, { FlightDetail } from "../api/flightApi";

export default function useGetFlightList(): {
  data: FlightDetail[] | undefined;
  loading: boolean;
  error?: Error;
} {
  const apiService = new FlightApi(axiosInstance);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [flightsDetails, setFlightsDetails] = useState<FlightDetail[]>();

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await apiService.fetchFlights();
      setFlightsDetails(response);
    };

    setLoading(true);
    fetchFlights()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });

    const intervalId = setInterval(async () => {
      try {
        const response = await apiService.fetchFlights();
        setFlightsDetails(response);
      } catch (reason) {
        setFlightsDetails((prev) => prev);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { data: flightsDetails, loading, error };
}
