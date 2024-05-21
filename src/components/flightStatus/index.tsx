import { Typography } from "@mui/material";
import { FlightStatus as FlightStatusEnum } from "../../api/flightApi";
import "./FlightStatus.css";

const StatusClassNameMap: Record<FlightStatusEnum, string> = {
  [FlightStatusEnum.ON_TIME]: "flight-status-on-time",
  [FlightStatusEnum.BOARDING]: "flight-status-boarding",
  [FlightStatusEnum.DEPARTED]: "flight-status-departed",
  [FlightStatusEnum.DELAYED]: "flight-status-delayed",
};

export default function FlightStatus({
  status,
}: {
  status: FlightStatusEnum;
}) {
  return (
    <Typography
      className={`flight-status-body ${StatusClassNameMap[status]}`}
    >
      {status}
    </Typography>
  );
}
