import dotenv from "dotenv";
import { getMyCalendarDataByDate } from "./server.js"; // MCP server file path adjust করো

dotenv.config({ quiet: true });

(async () => {
  const today = new Date().toISOString().split("T")[0];
  const result = await getMyCalendarDataByDate(today);

  if (result.meetings && result.meetings.length > 0) {
    console.log("Aaj er meetings:");
    result.meetings.forEach((meeting) => console.log(`- ${meeting}`));
  } else if (result.error) {
    console.error("Error fetching meetings:", result.error);
  } else {
    console.log("Aaj kono meeting nai.");
  }
})();
