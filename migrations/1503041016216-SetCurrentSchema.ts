import { MigrationInterface, QueryRunner } from "typeorm";

export class SetCurrentSchema1503041016216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            set schema '817323570'
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
