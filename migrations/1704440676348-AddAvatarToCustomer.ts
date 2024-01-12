import { MigrationInterface, QueryRunner } from "typeorm"

export class AddAvatarToCustomer1704440676348 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
      alter table customers add column avatar text
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
      alter table customers drop column avatar
    `)
  }

}
