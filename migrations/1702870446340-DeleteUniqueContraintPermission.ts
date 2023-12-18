import { MigrationInterface, QueryRunner } from "typeorm"

export class DeleteUniqueContraintPermission1702890446340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table permissions drop CONSTRAINT permissions_policy_key
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
