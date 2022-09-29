import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./env";

export default new DataSource({
  type: "mysql",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/../entities/**/*{.ts,.js}`],
  subscribers: [],
  migrations: [],
});
