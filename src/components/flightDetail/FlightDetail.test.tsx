import { render, screen } from "@testing-library/react";
import { FlightStatus } from "../../api/flightApi";
import FlightDetail from "./index";

describe("FlightDetails", () => {
  const flightDetails = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "2024-05-20T18:18:23.141Z",
    status: FlightStatus.ON_TIME,
  };
  it("should render flight details", () => {
    render(<FlightDetail flightDetail={flightDetails} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("airline")).toBeInTheDocument();
    expect(screen.getByText("origin")).toBeInTheDocument();
    expect(screen.getByText("destination")).toBeInTheDocument();
    expect(screen.getByText("May 20 2024 11:48pm")).toBeInTheDocument();
    expect(screen.getByText("On Time")).toBeInTheDocument();
  });
});
