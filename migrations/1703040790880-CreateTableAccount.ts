import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableAccount1703040790880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table if not exists root.accounts (
                id text default floor(random() * 1000000000)::text,
                email text not null unique,
                password text not null,
                phone text not null unique,
                primary key(id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table root.accounts
        `)
    }

}
