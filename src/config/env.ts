import dotenv from "dotenv";
dotenv.config();

class env {
  static NODE_ENV = process.env.NODE_ENVIRONMENT;
  static PORT = +process.env.PORT!;

  // *Database Configurations
  static DATABASE_HOST = process.env.DATABASE_HOST;
  static DATABASE_PORT = +process.env.DATABASE_PORT!;
  static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
  static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  static DATABASE_NAME = process.env.DATABASE_NAME;

  // *Other Configurations
  static DEBUG_MODE = process.env.DEBUG_MODE;
  static JWT_SECRET = process.env.JWT_SECRET!;
  static TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN!;

  // *Server Information
  static BASE_URL = process.env.BASE_URL!;
}

export default env;
