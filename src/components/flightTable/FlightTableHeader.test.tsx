import { Table, TableContainer } from "@mui/material";
import FlightTableHeader from "./FlightTableHeader";

import { render, screen } from "@testing-library/react";

describe("FlightsTableHeader", () => {
  it("Should renders flight table header correctly", () => {
    render(
      <TableContainer>
        <Table>
          <FlightTableHeader
            order={"asc"}
            orderBy={"departureTime"}
            handleSort={() => {}}
          />
        </Table>
      </TableContainer>
    );

    const flightNumberHeader = screen.getByText("Flight Number");
    expect(flightNumberHeader).toBeInTheDocument();

    const airlineHeader = screen.getByText("Airline");
    expect(airlineHeader).toBeInTheDocument();

    const originHeader = screen.getByText("Origin");
    expect(originHeader).toBeInTheDocument();

    const destinationHeader = screen.getByText("Destination");
    expect(destinationHeader).toBeInTheDocument();

    const departureTimeHeader = screen.getByText("Departure Time");
    expect(departureTimeHeader).toBeInTheDocument();

    const statusHeader = screen.getByText("Status");
    expect(statusHeader).toBeInTheDocument();
  });

  it("Should renders correct number of columns", () => {
    render(
      <FlightTableHeader
        order={"asc"}
        orderBy={"departureTime"}
        handleSort={() => {}}
      />
    );

    const tableHead = screen.getByRole("rowgroup");
    const tableHeaders = tableHead.querySelectorAll("th");

    expect(tableHeaders.length).toBe(6);
  });
});
