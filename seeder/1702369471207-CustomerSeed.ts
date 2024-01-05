import { Faker, en, vi } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from "typeorm";


export class CustomerSeed1702366042225 implements MigrationInterface {

  transaction: false;

  public async up(queryRunner: QueryRunner): Promise<void> {

    const f = new Faker({
      locale: [vi, en]
    })
    const addresses = await queryRunner.query(`
      select id from addresses
    `)

        console.log(addresses)

    for (let i = 0; i <= 1000; i++) {
      try {
      const firstName = f.name.firstName();
      const lastName = f.name.lastName();
      const addressIndex = f.number.int({min: 0, max: addresses.length-1})
        await queryRunner.query(`
                insert into customers
                (id, name, email, phone, dob, address_id, identify, note, "createdAt", "updatedAt", "extension") values
                (default,
                '${firstName + lastName}',
                '${f.internet.email({
          firstName, lastName
        })}',
                '${f.phone.number()}',
                '${f.date.birthdate().toISOString()}',
                '${addresses[addressIndex].id}',
                default,
                '${f.person.jobDescriptor()}',
                default,
                default,
                '+84'
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
