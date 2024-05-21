import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import FlightTable from "./index";

describe("FlightTable", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "2024-05-20T18:18:23.141Z",
    status: FlightStatus.ON_TIME,
  };

  it("Should renders flight table correctly", async () => {
    const { findByText } = render(
      <Router>
        <FlightTable flights={[flightDetails]} />
      </Router>
    );

    const flightNumber = await findByText("1");
    expect(flightNumber).toBeInTheDocument();

    const airline = await findByText("airline");
    expect(airline).toBeInTheDocument();

    const origin = await findByText("origin");
    expect(origin).toBeInTheDocument();

    const destination = await findByText("destination");
    expect(destination).toBeInTheDocument();

    const departureTime = await findByText("May 20 2024 11:48pm");
    expect(departureTime).toBeInTheDocument();

    const status = await findByText("On Time");
    expect(status).toBeInTheDocument();
  });
});
