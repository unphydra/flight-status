import { render, screen, waitFor } from "@testing-library/react";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import FlightDetailContainer from "../FlightDetail";

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
}));

vi.mock("axios", async (importActual) => {
  const actual = await importActual<typeof import("axios")>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
      })),
    },
  };

  return mockAxios;
});

vi.mock("../../components/FlightDetail", () => ({
  default: () => <div data-testid="flight-detail"></div>,
}));

describe("FlightDetailContainer", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "2024-05-20T18:18:23.141Z",
    status: FlightStatus.ON_TIME,
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("Should renders flight detail", async () => {
    mocks.get.mockResolvedValue({ data: flightDetails });
    render(<FlightDetailContainer id={"1"} />);
    await waitFor(() => {
      const flightDetail = screen.getByTestId("flight-detail");
      expect(flightDetail).toBeInTheDocument();
    });
  });
});
