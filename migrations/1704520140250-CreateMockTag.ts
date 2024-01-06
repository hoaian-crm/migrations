import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMockTag1704520140250 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists mock_tags (
                id serial,
                description text,
                primary key (id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        drop table mock_tags
    `);
  }
}
