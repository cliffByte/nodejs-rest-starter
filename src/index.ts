import "reflect-metadata";
import dataSource from "./config/database.config";
import app from "./config/app";
import env from "./config/env";
import Print from "./utils/Print";

dataSource
  .initialize()
  .then(async () => {
    app.listen(env.PORT, async () => {
      Print.info("Redis Connected Successfully");
      Print.info(`Server is running on port ${env.PORT}`);
      Print.info("DataBase Connected Successfully ");
    });
  })
  .catch((err) => {
    Print.error(err);
  });
