import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import { FlightTableRow } from "./FlightTableRow";

describe("FlightTableRow", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "2024-05-20T18:18:23.141Z",
    status: FlightStatus.ON_TIME,
  };

  it("Should renders flight table row correctly", async () => {
    render(
      <Router>
        <FlightTableRow flightDetails={flightDetails} />
      </Router>
    );

    const flightNumber = await screen.findByText("1");
    expect(flightNumber).toBeInTheDocument();

    const airline = await screen.findByText("airline");
    expect(airline).toBeInTheDocument();

    const origin = await screen.findByText("origin");
    expect(origin).toBeInTheDocument();

    const destination = await screen.findByText("destination");
    expect(destination).toBeInTheDocument();

    const departureTime = await screen.findByText("May 20 2024 11:48pm");
    expect(departureTime).toBeInTheDocument();

    const status = await screen.findByText("On Time");
    expect(status).toBeInTheDocument();
  });
});
