import { MigrationInterface, QueryRunner } from "typeorm"

export class DeleteUniqueContraintRole1702099058668 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table roles drop constraint unique_role_name
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log("No down")
  }

}
