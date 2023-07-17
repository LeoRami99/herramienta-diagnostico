
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  await prisma.$disconnect();
  return NextResponse.json(users);
}
// export async function POST() {
//   const prisma = new PrismaClient();
//   const user = await prisma.user.create();