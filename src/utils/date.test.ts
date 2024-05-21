import { formatDateTime } from "./date";

describe("Date", () => {
  describe("formatDateTime", () => {
    it("should format dateTime", () => {
      const date = new Date("2024-01-21T08:47:08.470Z").toISOString();
      const expectedDateTime = "Jan 21 2024 02:17pm";
      expect(formatDateTime(date)).toEqual(expectedDateTime);
    });
  });
});
