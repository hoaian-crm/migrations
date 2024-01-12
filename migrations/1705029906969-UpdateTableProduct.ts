import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateTableProduct1705029906969 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table products 
        add column image text,
        add column "inStock" boolean default true,
        add column stock int default 0,
        add column "deletedAt" timestamp;
      `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table products
      drop column image,
      drop column "inStock",
      drop column stock,
      drop column "deletedAt";
    `)
  }

}
