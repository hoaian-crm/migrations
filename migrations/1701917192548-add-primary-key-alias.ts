import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPrimaryKeyAlias1701917192548 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`
    //   alter table products add primary key (alias);
    // `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          alter table products drop constraint products_pkey cascade;
    `);
  }
}
