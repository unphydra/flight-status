import { Box, CircularProgress } from "@mui/material";
import "./Loader.css";

export default function Loader() {
  return (
    <Box className="loader-body">
      <CircularProgress />
    </Box>
  );
}
