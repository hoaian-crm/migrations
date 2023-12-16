import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableRole1602727121977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists roles (
                id serial,
                name text not null,
                description text not null,
                primary key(id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
