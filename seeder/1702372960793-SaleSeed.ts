import { faker } from "@faker-js/faker";
import { MigrationInterface, QueryRunner } from "typeorm";

export class SaleSeed1702372960793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const customerIds = (
      await queryRunner.query("select id from customers")
    ).map((c) => c.id);
    const productIds = (await queryRunner.query("select id from products limit 100")).map(
      (p) => p.id
    );
    for (let i = 0; i <= 100000; i++) {
        const date = faker.date.between({
            from: "2023-01-01T00:00:00.000Z",
            to: "2024-01-01T00:00:00.000Z",
        }).toISOString()
        const cId = customerIds[faker.number.int({min: 0, max: customerIds.length - 1})];
        const pId = productIds[faker.number.int({min: 0, max: productIds.length - 1})];
        const sale = await queryRunner.query(`
            insert into sales (id, status, "createdAt", "updatedAt", product_id, customer_id, amount, "timeStart") values
            (
            default,
            default,
            '${date}',
            '${date}',
            ${pId},
            ${cId},
            ${faker.number.int({min: 0, max: 10})},
            '${date}'
            )
        `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
