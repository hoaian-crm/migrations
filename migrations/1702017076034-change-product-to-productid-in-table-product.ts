import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProductToProductidInTableProduct1702017076034
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table sales rename column product to product_id;
  `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table sales rename column product_id to product;
`);
  }
}
