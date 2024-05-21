import { TableCell, TableHead, TableRow } from "@mui/material";
import { FlightDetail } from "../../api/flightApi";

const columns: {
  id: keyof FlightDetail;
  label: string;
}[] = [
  {
    id: "flightNumber",
    label: "Flight Number",
  },
  {
    id: "airline",
    label: "Airline",
  },
  {
    id: "origin",
    label: "Origin",
  },
  {
    id: "destination",
    label: "Destination",
  },
  {
    id: "departureTime",
    label: "Departure Time",
  },
  {
    id: "status",
    label: "Status",
  },
];

export default function FlightTableHeader() {
  return (
    <TableHead className="flight-table-header">
      <TableRow>
        {columns.map(({ label }, index) => (
          <TableCell key={index}>{label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
