import { config } from "dotenv";
import { DataSource } from "typeorm";
import { SetCurrentSchema1503041016216 } from "./1503041016216-SetCurrentSchema";
import { CreateRootSchema1503041016217 } from "./1503041016217-CreateRootSchema";
import { CreateTablePermission1602726437787 } from "./1602726437787-CreateTablePermission";
import { CreateTableRole1602727121977 } from "./1602726440867-CreateTableRole";
import { CreateTableRolePermissions1602727121977 } from "./1602727121977-CreateTableRolePermissions";
import { CreateTableUser1603726410372 } from "./1603726410372-CreateTableUser";
import { CreatePluginTable1700473822354 } from "./1700473822354-CreatePluginTable";
import { AddColumnConfigToPlugin1700531709988 } from "./1700531709988-AddColumnConfigToPlugin";
import { AddTablePluginPermission1700535138704 } from "./1700535138704-AddTablePluginPermission";
import { AddTableMail1700555976577 } from "./1700555976577-AddTableMail";
import { CreateTableEvents1700582766301 } from "./1700582766301-CreateTableEvents";
import { CreateTableListener1700664641136 } from "./1700664641136-CreateTableListener";
import { CreatePermissionForPuginApi1700983556030 } from "./1700983556030-CreatePermissionForPuginApi";
import { DropColumnInTablePlugin1701094105442 } from "./1701094105442-DropColumnInTablePlugin";
import { AddUniqueForPlugin1701094534049 } from "./1701094534049-AddUniqueForPlugin";
import { AddConfigFieldToTablePlugin1701095137232 } from "./1701095137232-AddConfigFieldToTablePlugin";
import { ProductsTable1701177454295 } from "./1701177454295ProductsTable";
import { CreateProductTable1701220015500 } from "./1701220015500-create-product-table";
import { AddEnableForPluginApi1701245604826 } from "./1701245604826AddEnableForPluginApi";
import { Customer1701267400879 } from "./1701267400879-customer";
import { UpdateV2Product1701313536586 } from "./1701313536586-update-v2-product";
import { CreateStoragePermission1701317000000 } from "./1701317000000-CreateStoragePermission";
import { Tags1701320123449 } from "./1701320123449-tags";
import { UpdateTagsForProduct1701331562567 } from "./1701331562567-update-tags-for-product";
import { CreateTableTemplate1701400687844 } from "./1701400687844-CreateTableTemplate";
import { AddMailPermission1701509428731 } from "./1701509428731-AddMailPermission";
import { CreateTableSales1701514886276 } from "./1701514886276-create-table-sales";
import { AddColumnImageToTemplate1701594237013 } from "./1701594237013-AddColumnImageToTemplate";
import { AddColumnDescriptionToTemplate1701598238584 } from "./1701598238584-AddColumnDescriptionToTemplate";
import { DeleteTableProduct1701710170910 } from "./1701710170910-delete-table-product";
import { UpdateAmountCustomerProductTimestart1701787728932 } from "./1701787728932-update-amount-customer-product-timestart";
import { AddPrimaryKeyAlias1701917192548 } from "./1701917192548-add-primary-key-alias";
import { AddRolePermission1701964114313 } from "./1701964114313-AddRolePermission";
import { ChangeProductInTableSales1702022550577 } from "./1702022550577-change-product-in-table-sales";
import { DeleteUniqueContraintRole1702099058668 } from "./1702099058668-DeleteUniqueContraintRole";
import { CreateSalePermission1702564771682 } from "./1702564771682-CreateSalePermission";
import { AddAddressCutomer1702814301219 } from "./1702814301219-AddAddressCutomer";
import { DeleteUniqueContraintPermission1702890446340 } from "./1702870446340-DeleteUniqueContraintPermission";
import { CreatePermissions1702889338854 } from "./1702889338854-CreatePermissions";
import { CreateTableAccount1703040790880 } from "./1703040790880-CreateTableAccount";
import { UpdateFieldDisableForProducts1703082278279 } from "./1703082278279-update-field-disable-for-products";
import { CreateTableAddresses1704176879565 } from "./1704176879565-CreateTableAddresses";
import { UpdateAddressRelationCustomer1704177458199 } from "./1704177458199-UpdateAddressRelationCustomer";
import { CreateDobAndExtensionCustomer1704293914488 } from "./1704293914488-CreateDobAndExtensionCustomer";
import { AddSoftDeleteCustomers1704302897117 } from "./1704302897117-AddSoftDeleteCustomers";

config();
export default new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  schema: process.env.PG_SCHEMA,
  port: +process.env.PG_PORT,
  entities: [],
  migrations: [
    SetCurrentSchema1503041016216,
    CreateRootSchema1503041016217,
    CreateTablePermission1602726437787,
    CreateTableRole1602727121977,
    CreateTableRolePermissions1602727121977,
    CreateTableUser1603726410372,
    CreatePluginTable1700473822354, //1
    AddColumnConfigToPlugin1700531709988, //2
    AddTablePluginPermission1700535138704, //3
    AddTableMail1700555976577, //4
    CreateTableEvents1700582766301, //5
    CreateTableListener1700664641136, //6
    CreatePermissionForPuginApi1700983556030, //7
    DropColumnInTablePlugin1701094105442, //8
    AddUniqueForPlugin1701094534049, //9
    AddConfigFieldToTablePlugin1701095137232, //10
    ProductsTable1701177454295, //11
    CreateProductTable1701220015500, //12
    AddEnableForPluginApi1701245604826, //13
    Customer1701267400879, //14
    UpdateV2Product1701313536586, //15
    CreateStoragePermission1701317000000, //16
    Tags1701320123449, //17
    UpdateTagsForProduct1701331562567, //18
    CreateTableTemplate1701400687844, //19
    AddMailPermission1701509428731, //20
    CreateTableSales1701514886276, //21
    AddColumnImageToTemplate1701594237013, //22
    AddColumnDescriptionToTemplate1701598238584, //23
    DeleteTableProduct1701710170910, //24
    UpdateAmountCustomerProductTimestart1701787728932, //26
    AddPrimaryKeyAlias1701917192548,
    AddRolePermission1701964114313,
    ChangeProductInTableSales1702022550577,
    // CreateAddressTable1702369163303,
    // ChangeColumnAddress1702369471207,
    DeleteUniqueContraintRole1702099058668,
    CreateSalePermission1702564771682,
    AddAddressCutomer1702814301219,
    DeleteUniqueContraintPermission1702890446340,
    CreatePermissions1702889338854,
    CreateTableAccount1703040790880,
    UpdateFieldDisableForProducts1703082278279,
    CreateTableAddresses1704176879565,
    UpdateAddressRelationCustomer1704177458199,
    CreateDobAndExtensionCustomer1704293914488,
    AddSoftDeleteCustomers1704302897117
  ],
});
