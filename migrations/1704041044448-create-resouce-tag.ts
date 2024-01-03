import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateResouceTag1704041044448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
    create table if not exists resource_tags (
        id serial,
        key text not null,
        value text not null,
        resource text not null,
        resource_id int not null,
        primary key (id)
    )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
       drop table resource_tags
    `);
  }
}
