import { MigrationInterface, QueryRunner } from "typeorm"

export class DropColumnAlias1705329188930 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table products drop column alias
      `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
