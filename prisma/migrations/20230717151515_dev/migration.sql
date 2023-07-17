/*
  Warnings:

  - You are about to drop the column `user_id` on the `Acceso` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Acceso` DROP FOREIGN KEY `Acceso_user_id_fkey`;

-- AlterTable
ALTER TABLE `Acceso` DROP COLUMN `user_id`;
