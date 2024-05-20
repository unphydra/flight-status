import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should render the title", () => {
    render(<App />);

    const linkElement = screen.getByText(/Flight Status/i);
    expect(linkElement).toBeInTheDocument();
  });
});
