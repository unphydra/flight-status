import { render, screen, waitFor } from "@testing-library/react";
import { FlightDetail, FlightStatus } from "../../api/flightApi";
import FlightListContainer from "../FlightList";

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

vi.mock("../../components/flightTable", () => ({
  default: () => <div data-testid="flight-table"></div>,
}));

describe("FlightListContainer", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "departureTime",
    status: FlightStatus.ON_TIME,
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("Should renders flight table", async () => {
    mocks.get.mockResolvedValue({ data: [flightDetails] });
    render(<FlightListContainer />);
    await waitFor(() => {
      const flightTable = screen.getByTestId("flight-table");
      expect(flightTable).toBeInTheDocument();
    });
  });
});
