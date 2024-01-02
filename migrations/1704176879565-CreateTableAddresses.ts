import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableAddresses1704176879565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`
            create table if not exists addresses (
                id text unique,
                metadata jsonb,
                "createdAt" timestamp default NOW(),
                "updatedAt" timestamp default NOW(),
                primary key (id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(`
            drop table addresses
        `)
    }

}
