import "reflect-metadata";
import dataSource from "./config/database.config";
import app from "./config/app";
import env from "./config/env";
import Print from "./utils/Print";

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      Print.info(`Server is running on port ${env.PORT}`);
    });
  })
  .catch((err) => {
    Print.error(err);
  });
