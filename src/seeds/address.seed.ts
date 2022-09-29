import env from "../config/env";
import mysql from "mysql2";
import Print from "../utils/Print";
import fs from "fs";

let pool: mysql.Pool;
pool = mysql.createPool({
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  user: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
});

let field;

let args = process.argv.slice(2);

if (args[0] === "-province") {
  field = "province";
} else if (args[0] === "-district") {
  field = "district";
} else if (args[0] === "-municipality") {
  field = "municipality";
} else if (args[0] === "-ward") {
  field = "ward";
} else {
  Print.warn("Please enter a valid field");
  process.exit();
}
let filePath = `./src/constants/sql/${field}.sql`;

const seedQuery = fs.readFileSync(filePath, { encoding: "utf8" });
try {
  pool.query(seedQuery, (err: any, res: any) => {
    if (err) {
      return Print.error(err.message);
    }
    Print.info("Seeding Completed!");
    pool.end();
  });
} catch (error) {
  Print.warn("something went wrong on seeding");
}
