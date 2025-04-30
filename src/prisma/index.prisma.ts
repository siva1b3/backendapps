import { PrismaClient } from "@prisma/client";

/**
 * Initializes an instance of the PrismaClient, which provides a connection
 * to the database and allows interaction with the database using Prisma ORM.
 *
 * @remarks
 * - Ensure that the Prisma schema is properly configured before using this client.
 * - This client should be used to perform CRUD operations on the database.
 *
 * @example
 * ```typescript
 * const prisma = new PrismaClient();
 * const users = await prisma.user_table.findMany();
 * console.log(users);
 * ```
 *
 * @see https://www.prisma.io/docs/reference/tools-and-interfaces/prismaclient
 */
const prisma = new PrismaClient();

export default prisma;
