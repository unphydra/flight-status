import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./index";

describe("Header", () => {
  it("Should renders without crashing", () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render app bar title", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const appBarTitleText = screen.getByText(/Flight Status/i);
    expect(appBarTitleText).toBeInTheDocument();
  });
});
