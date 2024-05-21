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

describe("Flight Api", () => {
  const flightDetails: FlightDetail = {
    id: 1,
    flightNumber: "1",
    airline: "airline",
    origin: "origin",
    destination: "destination",
    departureTime: "2024-05-20T18:18:23.141Z",
    status: FlightStatus.ON_TIME,
  };

  describe("fetchFlights", () => {
    it("should fetch flights status details", async () => {
      mocks.get.mockResolvedValue({ data: [flightDetails] });

      const res = await new FlightApi(instance).fetchFlights();
      expect(res).toEqual([flightDetails]);
    });
  });
  describe("fetchFlightDetails", () => {
    it("should fetch flight details", async () => {
      mocks.get.mockResolvedValue({ data: flightDetails });
      const res = await new FlightApi(instance).fetchFlights();
      expect(res).toEqual(flightDetails);
    });
  });
});
