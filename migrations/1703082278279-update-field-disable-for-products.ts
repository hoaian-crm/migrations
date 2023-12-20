import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFieldDisableForProducts1703082278279
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
    ALTER TABLE products
    ADD COLUMN disable boolean default false;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
    alter table products
    drop disable;
    `);
  }
}
