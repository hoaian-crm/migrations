import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCustomerInTableSalesToCustomerId1701958187381
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table sales rename column customer to customer_id
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table sales rename column customer_id to customer
`);
  }
}
