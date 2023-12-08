import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProductInTableSales1702022550577
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table sales rename column customer to customer_id
`);
    await queryRunner.query(`
      alter table sales rename column product to product_id
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table sales rename column customer_id to customer
`);
    await queryRunner.query(`
      alter table sales rename column product_id to product
`);
  }
}
