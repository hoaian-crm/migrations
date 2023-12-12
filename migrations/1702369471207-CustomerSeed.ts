import { Faker, en, vi } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from "typeorm";


export class CustomerSeed1702366042225 implements MigrationInterface {

    transaction: false;

    public async up(queryRunner: QueryRunner): Promise<void> {

        const f = new Faker({
            locale: [vi, en]
        })

        for (let i = 0; i <= 10; i++){
            try {
            await queryRunner.query(`
                insert into customers
                (id, name, email, phone, age, address_id, identify, note, "createdAt", "updatedAt") values
                (default,
                '${f.person.fullName()}',
                '${f.internet.email({})}',
                '${f.phone.number()}',
                '${f.number.int({ min: 0, max: 60 })}',
                default,
                default,
                '${f.person.jobDescriptor()}',
                default,
                default
                )
            `)
            } catch (error) {
                console.log(error)
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
