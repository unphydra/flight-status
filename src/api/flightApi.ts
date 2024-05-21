import { AxiosInstance } from "axios";

export enum FlightStatus {
  ON_TIME = "On Time",
  BOARDING = "Boarding",
  DELAYED = "Delayed",
  DEPARTED = "Departed",
}

export type FlightDetail = {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: FlightStatus;
};

export default class FlightApi {
  constructor(private apiService: AxiosInstance) {}

  async fetchFlights(): Promise<FlightDetail[]> {
    const { data } = await this.apiService.get("/flights");
    return data;
  }
}
