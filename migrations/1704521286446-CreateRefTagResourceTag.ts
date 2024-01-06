import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRefTagResourceTag1704521286446
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        alter table resource_tags add constraint fk_tag foreign key (key) references tags(key) 
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.query(`
        alter table resource_tags drop constraint fk_tag
    `)
  }
}
