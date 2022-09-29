import { Environment } from "../constants/environment";
import env from "../config/env";
import Logger from "../config/logger";
import chalk from "chalk";

const log = console.log;

class Print {
  static error(message: string) {
    if (env.NODE_ENV === Environment.Development) {
      log(chalk.red("ERROR: ", message));
    } else {
      Logger.error(message);
    }
  }

  static info(message: string) {
    if (env.NODE_ENV === Environment.Development) {
      log(chalk.green("INFO: ", message));
    } else {
      Logger.info(message);
    }
  }

  static warn(message: string) {
    if (env.NODE_ENV === Environment.Development) {
      log(chalk.bgRed("WARNING: ", message));
    } else {
      Logger.warn(message);
    }
  }

  static debug(message: string) {
    if (env.NODE_ENV === Environment.Development) {
      log(chalk.bgYellow("DEBUG: ", message));
    } else {
      Logger.debug(message);
    }
  }
}

export default Print;
