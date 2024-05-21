import { Container, Paper, Typography } from "@mui/material";
import { ComponentType } from "react";
import "./ErrorCard.css";

interface Props {
  title: string;
  description: string;
  ActionComponent?: ComponentType;
}

export default function ErrorCard({
  title,
  description,
  ActionComponent,
}: Props) {
  return (
    <Paper elevation={3} className="error-card-paper">
      <Container>
        <Typography variant={"h5"} className="error-card-typography">
          {title}
        </Typography>
        <Typography className="error-card-typography">
          {description}
        </Typography>
        {ActionComponent && <ActionComponent />}
      </Container>
    </Paper>
  );
}
