import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { FlightDetail } from "../../api/flightApi";
import { formatDateTime } from "../../utils/date";
import FlightStatus from "../flightStatus";

export function FlightTableRow({
  flightDetails,
}: {
  flightDetails: FlightDetail;
}) {
  const navigate = useNavigate();
  return (
    <TableRow
      key={flightDetails.id}
      hover={true}
      onClick={() => {
        navigate(`/flight/${flightDetails.id}`);
      }}
      className="flight-table-body-row"
    >
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
