import { render } from "@testing-library/react";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import FlightTable from "./index";

describe("FlightTable", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "departureTime",
    status: FlightStatus.ON_TIME,
  };

  it("Should renders without crashing", async () => {
    const { container } = render(
      <FlightTable flights={[flightDetails]} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should renders flight table correctly", async () => {
    const { findByText } = render(
      <FlightTable flights={[flightDetails]} />
    );

    const flightNumber = await findByText("1");
    expect(flightNumber).toBeInTheDocument();

    const airline = await findByText("airline");
    expect(airline).toBeInTheDocument();

    const origin = await findByText("origin");
    expect(origin).toBeInTheDocument();

    const destination = await findByText("destination");
    expect(destination).toBeInTheDocument();

    const departureTime = await findByText("departureTime");
    expect(departureTime).toBeInTheDocument();

    const status = await findByText("On Time");
    expect(status).toBeInTheDocument();
  });
});
