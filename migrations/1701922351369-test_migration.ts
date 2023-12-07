import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration1701922351369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table if not exists testMigration(
        id serial,
        primary key (id)
      )
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE testMigration
`);
  }
}
