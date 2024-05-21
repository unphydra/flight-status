import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { FlightDetail } from "../../api/flightApi";

export function FlightTableRow({
  flightDetails,
}: {
  flightDetails: FlightDetail;
}) {
  return (
    <TableRow key={flightDetails.id}>
      <TableCell>{flightDetails.flightNumber}</TableCell>
      <TableCell>{flightDetails.airline}</TableCell>
      <TableCell>{flightDetails.origin}</TableCell>
      <TableCell>{flightDetails.destination}</TableCell>
      <TableCell>{flightDetails.departureTime}</TableCell>
      <TableCell>{flightDetails.status}</TableCell>
    </TableRow>
  );
}
