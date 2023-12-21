import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRootSchema1503041016217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            create schema if not exists root
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropSchema('root')
    }

}
