import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/route";
import { sendError } from "./utils/app.helpers";
import config from "./configs/config";
import corsOptions from "./configs/cors";

const app: Express = express();
const port = config.serverPort || 8000;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", router);

app.all("/", (_req: Request, _res: Response) => {
  return _res.json({
    createdAt: "Mon May 14 2024 09:24:35 GMT+0100 (West Africa Standard Time)",
    current_time: Date(),
    message: "TypeScript App Built With Express",
  });
});

app.all("*", (_req: Request, _res: Response) => {
  return sendError({
    response: _res,
    errors: {},
    message: "Unsupported Request URL or Method",
    code: 405,
  });
});

app.listen(port, () => {
  if (config.development) {
    console.log(
      `[Server]: TypeScript Server with Express running at http://localhost:${port}/`
    );
  } else {
    console.log(
      `[Server]: TypeScript Production Server with Express running`
    );
  }
});
