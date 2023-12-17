import { config } from "dotenv";
import { DataSource } from "typeorm";
import { CustomerSeed1702366042225 } from "./1702369471207-CustomerSeed";
import { SaleSeed1702372960793 } from "./1702372960793-SaleSeed";
config();
export default new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  migrationsTableName: "seeders",
  entities: [],
  migrations: [CustomerSeed1702366042225, SaleSeed1702372960793],
});
