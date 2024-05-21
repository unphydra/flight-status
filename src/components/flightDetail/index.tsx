import { Box, Container, Typography } from "@mui/material";
import { FlightDetail as FlightDetailType } from "../../api/flightApi";
import { formatDateTime } from "../../utils/date";
import FlightStatus from "../flightStatus";
import "./FlightDetail.css";

export default function FlightDetail({
  flightDetail,
}: {
  flightDetail: FlightDetailType;
}) {
  return (
    <Container className="flight-detail-container">
      <Box className="flight-detail-box">
        <Box className="flight-detail-airline-box">
          <Typography fontSize={"medium"}>
            {flightDetail.airline}
          </Typography>
          <Typography fontSize={"xx-large"}>
            {flightDetail.flightNumber}
          </Typography>
        </Box>
        <Box width={"60%"}>
          <Typography fontSize={"xx-large"} mt={"10px"}>
            {formatDateTime(flightDetail.departureTime)}
          </Typography>
          <Box className="flight-detail-info-box">
            <Box className="flight-detail-place-box">
              <Box className="flight-detail-place-bullet" />
              <Box className="flight-detail-place-connecter" />
              <Box className="flight-detail-place-bullet" />
            </Box>
            <Box className="flight-detail-place-typography-box">
              <Typography fontSize={"x-large"} mb={"60px"}>
                {flightDetail.origin}
              </Typography>
              <Typography fontSize={"x-large"}>
                {flightDetail.destination}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flight-detail-status-box">
          <FlightStatus status={flightDetail.status} />
        </Box>
      </Box>
    </Container>
  );
}
