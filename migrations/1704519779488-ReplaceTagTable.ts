import { MigrationInterface, QueryRunner } from "typeorm";

export class ReplaceTagTable1704519779488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table product_tag");
    await queryRunner.query("drop table tags");
    await queryRunner.query(`create table if not exists tags (
            key text unique,
            color text default '#3f3f3f',
            description text default 'New tag',
            "createdAt" timestamp default NOW(),
            "updatedAt" timestamp default NOW(),
            "deletedAt" timestamp,
            primary key("key")
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
