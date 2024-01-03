import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePrimaryKeyForResourceTags1704306039139
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        ALTER TABLE resource_tags
        ADD CONSTRAINT resource_tag_key unique (key, value, resource, resource_id)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        ALTER TABLE resource_tags
        DROP CONSTRAINT resource_tag_key
    `);
  }
}
