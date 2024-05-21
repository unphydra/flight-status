import { render, screen } from "@testing-library/react";
import { FlightStatus as FlightStatusEnum } from "../../api/flightApi";
import FlightStatus from "./index";

describe("FlightStatus", () => {
  it("should render the correct status", () => {
    render(<FlightStatus status={FlightStatusEnum.ON_TIME} />);
    const statusElement = screen.getByText(/On Time/i);
    expect(statusElement).toBeInTheDocument();
  });
});
