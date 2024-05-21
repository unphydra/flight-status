import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader", () => {
  it("Should renders loader", () => {
    render(<Loader />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
