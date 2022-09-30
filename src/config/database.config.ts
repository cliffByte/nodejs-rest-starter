import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./env";

 const AppDataSource =new DataSource({
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

export default AppDataSource;