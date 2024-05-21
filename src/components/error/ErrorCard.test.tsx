import { render, screen } from "@testing-library/react";
import ErrorCard from "./ErrorCard";

describe("ErrorCard", () => {
  const title = "Error Title";
  const description = "Error Description";

  it("Should renders without crashing", () => {
    const { container } = render(
      <ErrorCard title={title} description={description} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should renders title and description", () => {
    render(<ErrorCard title={title} description={description} />);

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders action component if provided", () => {
    const ActionComponent = () => <button>Retry</button>;

    render(
      <ErrorCard
        title={title}
        description={description}
        ActionComponent={ActionComponent}
      />
    );

    const actionComponent = screen.getByRole("button", { name: "Retry" });

    expect(actionComponent).toBeInTheDocument();
  });
});
