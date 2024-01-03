import { MigrationInterface, QueryRunner } from "typeorm"

export class AddSoftDeleteCustomers1704302897117 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        alter table customers add column "deletedAt" timestamp
      `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        alter table customers drop column "deletedAt"
      `)
  }

}
