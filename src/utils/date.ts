import dayjs from "dayjs";

const formatDateTime = (dateString: string) =>
  dayjs(dateString).format("MMM D YYYY hh:mma");

export { formatDateTime };
