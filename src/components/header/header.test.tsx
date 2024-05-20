import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./index";

test("should render app bar title", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const appBarTitleText = screen.getByText(/Flight Status/i);
  expect(appBarTitleText).toBeInTheDocument();
});
