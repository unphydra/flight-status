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

export default function FlightTable({
  flights,
}: {
  flights?: FlightDetail[];
}) {
  const rowsPerPage = 8;
  const [page, setPage] = useState(0);

  return (
    <TableContainer>
      <Table>
        <FlightTableHeader />
        <TableBody>
          {flights
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
