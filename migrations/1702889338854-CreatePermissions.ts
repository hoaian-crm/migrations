import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePermissions1702889338854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (let permission of permissions) {
            await queryRunner.query(`
                insert into permissions (id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt", "deletedAt")
                values (default, '${permission.name}', '${permission.description}', '${permission.policy}', '${permission.resource}', '${permission.upstream}', '${permission.method}', default, default, default)
            `)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from permissions where policy in (${permissions.map(p => `'${p.policy}'`).join(', ')})
        `)
    }

}

const permissions = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Login",
    description: "Allow login to system",
    policy: "public",
    resource: "/users/login",
    upstream: "Authentication",
    method: "POST",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Register",
    description: "Allow user register to system",
    policy: "public",
    resource: "/users/register",
    upstream: "Authentication",
    method: "POST",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Get profile",
    description: "Allow user get their profile",
    policy: "users:profile",
    resource: "/users/profile",
    upstream: "Authentication",
    method: "GET",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Active user",
    description: "Allow user active their account",
    policy: "public",
    resource: "/users/active",
    upstream: "Authentication",
    method: "PUT",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Update password",
    description: "Allow user update password",
    policy: "users:update_password",
    resource: "/users/update_password",
    upstream: "Authentication",
    method: "PUT",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "List user",
    description: "Allow get list of user",
    policy: "users:read_all",
    resource: "/users/list",
    upstream: "Authentication",
    method: "GET",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Create permission",
    description: "User can create new permission",
    policy: "permissions:create",
    resource: "/permissions",
    upstream: "Authentication",
    method: "POST",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Get list permission",
    description: "User can get list permission",
    policy: "permissions:get_all",
    resource: "/permissions",
    upstream: "Authentication",
    method: "GET",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Create role",
    description: "User can create new role",
    policy: "role:create",
    resource: "/roles",
    upstream: "Authentication",
    method: "POST",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "List role",
    description: "User can list role",
    policy: "role:read_all",
    resource: "/roles",
    upstream: "Authentication",
    method: "GET",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Attach permission to role",
    description: "User can attach permission to role",
    policy: "role:attach_permission",
    resource: "/roles/:roleId/permissions/${permissionId}",
    upstream: "Authentication",
    method: "PUT",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Detach permission to role",
    description: "User can detach permission to role",
    policy: "role:detach_permission",
    resource: "/roles/:roleId/permissions/${permissionId}",
    upstream: "Authentication",
    method: "DELETE",
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Attach multiple permission to role",
    description: "User can attach permission to role",
    policy: "role:attach_permission",
    resource: "/roles/:roleId/permissions/",
    upstream: "Authentication",
    method: "PATCH",
  },
];