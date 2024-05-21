import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
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

export default function FlightTableHeader({
  orderBy,
  order,
  handleSort,
}: {
  orderBy: string;
  order: "asc" | "desc";
  handleSort: (property: keyof FlightDetail) => void;
}) {
  const createSortHandler = (property: keyof FlightDetail) => () => {
    handleSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map(({ id, label }, index) => (
          <TableCell key={index}>
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? order : "asc"}
              onClick={createSortHandler(id)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
