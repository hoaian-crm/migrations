import { MigrationInterface, QueryRunner } from "typeorm"

export class SaleModule1705894470932 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    // Create table orders
    await queryRunner.query(`
      create table if not exists orders (
        id serial,
        "customerId" int references customers(id),
        "createdAt" timestamp default NOW() ,
        "updatedAt" timestamp default NOW() ,
        "deletedAt" timestamp,
        primary key (id)
      )
    `)

    // Create table fees
    await queryRunner.query(`
      create table if not exists fees (
        id serial,
        value int,
        name text,
        "orderId" int not null references orders(id),
        "createdAt" timestamp default NOW() ,
        "updatedAt" timestamp default NOW() ,
        "deletedAt" timestamp,
        primary key (id)
      )
    `)


    // Create table product_order
    await queryRunner.query(`
      create table if not exists product_order (
        id serial,
        name text,
        image text,
        price int,
        qty int,
        "productId" int not null,
        "orderId" int references orders(id),
        "createdAt" timestamp default NOW() ,
        "updatedAt" timestamp default NOW() ,
        "deletedAt" timestamp,
        primary key (id)
      )
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      drop table fees;
      drop table product_order;
      drop table orders;
    `)
  }

}
