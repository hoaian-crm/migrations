import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableRolePermissions1602727121977
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists role_permissions (
                id serial,
                permission_id int references permissions(id),
                role_id int references roles(id),
                primary key(id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
