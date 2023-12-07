import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolePermission1701964114313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into permissions(id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt")
        values (DEFAULT, 'Update Role', 'Allow update role', 'role:update', '/roles/:roleId', 'Authentication', 'PUT', DEFAULT, DEFAULT);

        insert into permissions(id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt")
        values (DEFAULT, 'Delete Role', 'Allow delete role', 'role:delete', '/roles/:roleId', 'Authentication', 'DELETE', DEFAULT, DEFAULT);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        delete from permissions where policy in ('role:update', 'role:delete')
    `);
  }
}
