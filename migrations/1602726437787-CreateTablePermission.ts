import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePermission1602726437787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log(await queryRunner.getCurrentSchema())
    await queryRunner.manager.query(`create table if not exists permissions (
            id serial,
            name text not null,
            description text,
            policy text not null,
            resource text not null,
            upstream text not null,
            method text not null,
            primary key(id),
            "createdAt" timestamp default NOW(),
            "updatedAt" timestamp default NOW(),
            "deletedAt" timestamp
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table permissions`)
  }
}
