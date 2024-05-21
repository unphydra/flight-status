import { TableFooter } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { FlightDetail } from "../../api/flightApi";
import FlightTableHeader from "./FlightTableHeader";
import { FlightTableRow } from "./FlightTableRow";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof FlightDetail>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function FlightTable({
  flights,
}: {
  flights?: FlightDetail[];
}) {
  const rowsPerPage = 8;
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] =
    useState<keyof FlightDetail>("departureTime");
  const [order, setOrder] = useState<Order>("asc");

  const handleSort = (property: keyof FlightDetail) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedFlights = flights?.sort(getComparator(order, orderBy));

  return (
    <TableContainer>
      <Table>
        <FlightTableHeader
          order={order}
          orderBy={orderBy}
          handleSort={handleSort}
        />
        <TableBody>
          {sortedFlights
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((flightDetails) => (
              <FlightTableRow
                flightDetails={flightDetails}
                key={flightDetails.id}
              />
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={flights?.length || 0}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[rowsPerPage]}
              page={page}
              onPageChange={(_, newPage) => setPage(newPage)}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
