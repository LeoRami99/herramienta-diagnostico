import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: any, {params}:{params:{codigo:string}} , res:any) {
  const codigo = params.codigo;
  console.log(codigo);
  console.log(params.codigo);
  const acceso = await prisma.acceso.findUnique({
    where: {
      codigo_acceso: codigo,
    },
  })
  await prisma.$disconnect();
  if(acceso===null){
    return res.status(404).json({error: "No se encontro el codigo"});
  }else{
    return NextResponse.json(acceso);
  }
  // return NextResponse.json(acceso);
}
