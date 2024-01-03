import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateAddressRelationCustomer1704177458199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table customers drop column address
        `)

        await queryRunner.query(`
            alter table customers alter column address_id type text
        `)

        await queryRunner.query(`
            alter table customers
            add constraint fk_address foreign key(address_id) references addresses(id)
            on update cascade
            on delete cascade
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table customers add column address text
        `)
        await queryRunner.query(`
            alter table customers drop constraint fk_address
        `)
    }

}
