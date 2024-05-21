import { Container, Paper, Typography } from "@mui/material";
import { ComponentType } from "react";

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
    <Paper
      elevation={3}
      sx={{
        m: "20vh auto",
        maxWidth: "40vw",
        minHeight: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant={"h5"} mb={2}>
          {title}
        </Typography>
        <Typography mb={2}>{description}</Typography>
        {ActionComponent && <ActionComponent />}
      </Container>
    </Paper>
  );
}
