import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateAddressTable1702369163303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `create table public.address (
                id serial,
                customer_id int references public.customers(id),
                province_code text REFERENCES provinces.provinces (code),
                district_code text references provinces.districts (code),
                ward_code text references provinces.wards(code),
                extension text,
                primary key(id)
            )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table address`)
    }

}
