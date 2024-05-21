import { formatDateTime } from "./date";

describe("Date", () => {
  describe("formatDateTime", () => {
    it("should format dateTime", () => {
      const date = new Date("2024-05-21T11:39:28.387Z").toISOString();
      const expectedDateTime = "May 21 2024 05:09pm";
      expect(formatDateTime(date)).toEqual(expectedDateTime);
    });
  });
});
