import axios from "axios";

export default axios.create({
  baseURL: "https://flight-status-mock.core.travelopia.cloud",
});
