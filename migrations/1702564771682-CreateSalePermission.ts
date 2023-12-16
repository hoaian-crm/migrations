import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSalePermission1702564771682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into permissions(id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt")
        values (DEFAULT, 'Statistic Revenue Each Product', '', 'sale:total_revenue_by_product', '/sales/total_revenue_by_product', 'Sale', 'GET', DEFAULT, DEFAULT);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        delete from permissions where policy = 'sale:total_revenue_by_product'
    `);
  }
}
