import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import FlightApi, { FlightDetail } from "../api/flightApi";

export default function useGetFlightDetails(id: string): {
  data: FlightDetail | undefined;
  loading: boolean;
  error?: Error;
} {
  const apiService = new FlightApi(axiosInstance);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [flightDetails, setFlightDetails] = useState<FlightDetail>();

  useEffect(() => {
    const getFlightData = async () => {
      const response = await apiService.fetchFlightDetails(id);
      setFlightDetails(response);
    };

    setLoading(true);
    getFlightData()
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id]);

  return { data: flightDetails, loading, error };
}
