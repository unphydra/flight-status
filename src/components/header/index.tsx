import { Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Button onClick={() => navigate("/")}>
          <Typography variant="h2" component="div" color={"white"}>
            Flight Status
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
