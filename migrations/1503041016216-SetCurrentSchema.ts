import { MigrationInterface, QueryRunner } from "typeorm";

export class SetCurrentSchema1503041016216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            set schema ${process.env.PG_SCHEMA}
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
