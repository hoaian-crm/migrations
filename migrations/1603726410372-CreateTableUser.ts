import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1603726410372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists users (
                id serial,
                email text not null unique,
                "displayName" text,
                password text not null,
                avatar text,
                "referralCode" text,
                "otpCode" text,
                "active" boolean,
                iss text,
                role_id int references roles(id),
                "createdAt" timestamp default NOW(),
                "updatedAt" timestamp default NOW(),
                "deletedAt" timestamp,
                primary key(id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            drop table users
        `);
  }
}
