import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeColumnAddress1702369471207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table customers drop column address;
            alter table customers add column address_id int references address(id);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
