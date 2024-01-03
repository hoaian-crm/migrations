import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateDobAndExtensionCustomer1704293914488 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table customers drop column age
    `);
    await queryRunner.query(`
        alter table customers add column dob date
    `);
    await queryRunner.query(`
        alter table customers add column extension text
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table customers add column age int
    `)
    await queryRunner.query(`
      alter table customers drop column dob
    `)
    await queryRunner.query(`
      alter table customers drop column extension
    `)
  }

}
