import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddressCutomer1702814301219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            alter table customers add column address_id int 
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            alter table customers drop column address_id
    `);
  }
}
