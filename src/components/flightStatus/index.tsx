import { Typography, styled } from "@mui/material";
import { ReactNode } from "react";
import { FlightStatus as FlightStatusEnum } from "../../api/flightApi";

const Status = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
});

const OnTime = styled(Status)({
  color: "green",
  backgroundColor: "lightgreen",
});

const Boarding = styled(Status)({
  color: "blue",
  backgroundColor: "lightblue",
});

const Delayed = styled(Status)({
  color: "darkorange",
  backgroundColor: "#f8d494",
});

const Departed = styled(Status)({
  color: "red",
  backgroundColor: "#eec8c8",
});

const StatusComponentMap: Record<FlightStatusEnum, ReactNode> = {
  [FlightStatusEnum.ON_TIME]: <OnTime>{FlightStatusEnum.ON_TIME}</OnTime>,
  [FlightStatusEnum.BOARDING]: (
    <Boarding>{FlightStatusEnum.BOARDING}</Boarding>
  ),
  [FlightStatusEnum.DEPARTED]: (
    <Departed>{FlightStatusEnum.DEPARTED}</Departed>
  ),
  [FlightStatusEnum.DELAYED]: (
    <Delayed>{FlightStatusEnum.DELAYED}</Delayed>
  ),
};

export default function FlightStatus({
  status,
}: {
  status: FlightStatusEnum;
}) {
  return StatusComponentMap[status];
}
