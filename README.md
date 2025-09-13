# 📅 Juiena's Calendar MCP Server

This project integrates **Google Calendar** with the **Model Context Protocol (MCP)** to provide meeting and calendar data access through an MCP server.

It exposes a tool (`getMyCalendarDataByDate`) that fetches events from a Google Calendar on a given date.  
Additionally, a helper script (`checkToday.js`) can be run to check today’s meetings directly via CLI.

---

## 🚀 Features

- ✅ Runs an MCP server with **@modelcontextprotocol/sdk**
- ✅ Fetches Google Calendar events by date
- ✅ Validates date inputs using **Zod**
- ✅ Uses **dotenv** for environment variables
- ✅ CLI command to check today’s meetings
- ✅ Connects with **Cursor AI** via MCP integration

---

## 📂 Project Structure

├── server.js # MCP server (registers tools)

├── checkToday.js # CLI script to check today’s meetings

├── .env # Environment variables (not committed)

├── mcp.json # MCP configuration file for Cursor AI

├── package.json

└── README.md

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
     git clone https://github.com/jui9797/MCP-checking-meeting-schedules
     cd my-mcp
   ```
2. Install dependencies:

```bash
   npm install
```

3. Create a .env file:
   GOOGLE_PUBLIC_API_KEY=your_google_api_key
   CALENDAR_ID=your_calendar_id

4. Start the MCP server:

```bash
   npm run start:mcp
```

This will start the MCP server which tools (like Claude or OpenAI with MCP integration) can connect to.

5. Check today’s meetings via CLI:

```bash
  npm run check:today
```

Example output:

Today's meetings:

- Team Standup at 2025-09-06T09:00:00+06:00
- Client Call at 2025-09-06T14:00:00+06:00

If no meetings are found:

- You have no meeting for today.

If an error occurs:

- Error fetching meetings: <error_message>

## MCP Connection with Cursor AI

To connect this MCP server with Cursor AI, create an mcp.json file in your project (or in Cursor’s MCP config folder):

```bash
  {
     "name": "calendar-mcp",
     "command": "node",
     "args": ["server.js"],
     "transport": "stdio",
     "env": "public_api_key",
  }
```

## Tech Stack

- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) – MCP server framework
- [googleapis](https://www.npmjs.com/package/googleapis) – Google API client
- [zod](https://www.npmjs.com/package/zod) – Input validation
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management

## Future Improvements

- Support recurring events
- Add meeting creation and booking tool
- Add user authentication instead of API key
- Add support for multiple calendars

## Author

Junior Web Developer | Passionate about AI & Web Development
