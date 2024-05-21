import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function ErrorChildComponent(): JSX.Element {
  throw new Error("Oops! Something went wrong.");
}

function FallbackComponent(): JSX.Element {
  return <div>Something went wrong!</div>;
}

describe("ErrorBoundary", () => {
  it("Should renders without crashing", () => {
    const { container } = render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <div>Normal Child Component</div>
      </ErrorBoundary>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the fallback UI when an error occurs", () => {
    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ErrorChildComponent />
      </ErrorBoundary>
    );
    const fallbackText = screen.getByText(/Something went wrong!/i);
    expect(fallbackText).toBeInTheDocument();
  });

  it("should render the children when no error occurs", () => {
    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <div>Normal Child Component</div>
      </ErrorBoundary>
    );
    const normalChildComponent = screen.getByText(
      /Normal Child Component/i
    );
    expect(normalChildComponent).toBeInTheDocument();
  });
});
