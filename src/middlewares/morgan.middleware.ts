import morgan, { StreamOptions } from "morgan";
import dotenv from "../config/env";

import Logger from "../config/logger";
import { Environment } from "../constants/environment";

const stream: StreamOptions = {
  write: (message: String) => Logger.http(message),
};

const skip = () => {
  const env = dotenv.NODE_ENV || Environment.Development;
  return env !== Environment.Development;
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
