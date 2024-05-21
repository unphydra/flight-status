import { render } from "@testing-library/react";
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
  it("Should renders without crashing", () => {
    const { container } = render(
      <FlightTableRow flightDetails={flightDetails} />
    );
    expect(container).toMatchSnapshot();
  });
});
