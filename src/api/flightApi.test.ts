import instance from "./axios";
import FlightApi, { FlightDetail, FlightStatus } from "./flightApi";

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

describe("API Service", () => {
  it("should fetch flights status details", async () => {
    const flightDetails: FlightDetail = {
      id: 1,
      flightNumber: "1",
      airline: "airline",
      origin: "origin",
      destination: "destination",
      departureTime: "departureTime",
      status: FlightStatus.ON_TIME,
    };

    mocks.get.mockResolvedValue({ data: [flightDetails] });

    const res = await new FlightApi(instance).fetchFlights();

    expect(res).toEqual([flightDetails]);
  });
});
