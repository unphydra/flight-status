import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { FlightDetail } from "../../api/flightApi";
import { formatDateTime } from "../../utils/date";
import FlightStatus from "../flightStatus";

export function FlightTableRow({
  flightDetails,
}: {
  flightDetails: FlightDetail;
}) {
  return (
    <TableRow key={flightDetails.id} hover={true}>
      <TableCell>{flightDetails.flightNumber}</TableCell>
      <TableCell>{flightDetails.airline}</TableCell>
      <TableCell>{flightDetails.origin}</TableCell>
      <TableCell>{flightDetails.destination}</TableCell>
      <TableCell>{formatDateTime(flightDetails.departureTime)}</TableCell>
      <TableCell>
        <FlightStatus status={flightDetails.status} />
      </TableCell>
    </TableRow>
  );
}
