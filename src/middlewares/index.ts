import express, { Application } from "express";
import errorHandler from "./error.middleware";
import morganMiddleware from "./morgan.middleware";
import path from "path";
import routes from "../routes/index";
import swaggerUI from "swagger-ui-express";
// import swaggerui from "../../public/swagger/swagger.json";
import compression from "compression";

import env from "../config/env";

import { Environment } from "../constants/environment";

import fileUpload from "express-fileupload";

import cors from "cors";

const middlewares = (app: Application) => {
  app.use(compression());

  app.use(cors());

  app.use(express.json());

  app.use(fileUpload());

  app.use(morganMiddleware);

  app.use(express.static("public/uploads"));

  app.use("/api", routes);

  // *Route for swagger and serves only in development & testing development environment
  if (
    env.NODE_ENV === Environment.Development ||
    env.NODE_ENV === Environment.Test
  )
    // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerui));

    app.use(errorHandler);
};

export default middlewares;
