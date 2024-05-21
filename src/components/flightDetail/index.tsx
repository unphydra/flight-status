import { Box, Container, Typography } from "@mui/material";
import { FlightDetail as FlightDetailType } from "../../api/flightApi";
import { formatDateTime } from "../../utils/date";
import FlightStatus from "../flightStatus";

export default function FlightDetail({
  flightDetail,
}: {
  flightDetail: FlightDetailType;
}) {
  return (
    <Container
      sx={{
        marginTop: "100px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "30vh",
          justifyContent: "center",
          border: 2,
          borderRadius: 2,
          borderColor: "grey.400",
        }}
      >
        <Box
          width={"10%"}
          textAlign={"center"}
          alignSelf={"center"}
          mr={"20px"}
        >
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
          <Box display={"flex"} mt={"10px"} height={"60%"}>
            <Box display={"flex"} flexDirection={"column"} m={"10px 2px"}>
              <Box
                sx={{
                  border: "2px solid",
                  borderRadius: "12px",
                  boxSizing: "border-box",
                  height: "12px",
                  width: "12px",
                }}
              ></Box>
              <Box
                sx={{
                  borderRight: "4px dotted",
                  flex: 1,
                  marginBottom: "4px",
                  marginTop: "4px",
                  width: "4px",
                }}
              ></Box>
              <Box
                sx={{
                  border: "2px solid",
                  borderRadius: "12px",
                  boxSizing: "border-box",
                  height: "12px",
                  width: "12px",
                }}
              ></Box>
            </Box>
            <Box
              marginLeft={"10px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Typography fontSize={"x-large"} mb={"60px"}>
                {flightDetail.origin}
              </Typography>
              <Typography fontSize={"x-large"}>
                {flightDetail.destination}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width={"20%"} alignSelf={"center"}>
          <FlightStatus status={flightDetail.status} />
        </Box>
      </Box>
    </Container>
  );
}
