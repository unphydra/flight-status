import { render, screen } from "@testing-library/react";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import { FlightTableRow } from "./FlightTableRow";

describe("FlightTableRow", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "departureTime",
    status: FlightStatus.ON_TIME,
  };

  it("Should renders flight table row correctly", async () => {
    render(<FlightTableRow flightDetails={flightDetails} />);

    const flightNumber = await screen.findByText("1");
    expect(flightNumber).toBeInTheDocument();

    const airline = await screen.findByText("airline");
    expect(airline).toBeInTheDocument();

    const origin = await screen.findByText("origin");
    expect(origin).toBeInTheDocument();

    const destination = await screen.findByText("destination");
    expect(destination).toBeInTheDocument();

    const departureTime = await screen.findByText("departureTime");
    expect(departureTime).toBeInTheDocument();

    const status = await screen.findByText("On Time");
    expect(status).toBeInTheDocument();
  });
});
