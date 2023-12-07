import { config } from "dotenv";
import { DataSource } from "typeorm";
import { TestMigration1701922351369 } from "./1701922351369-test_migration";

config();

export default new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  entities: [],
  migrations: [TestMigration1701922351369],
});
