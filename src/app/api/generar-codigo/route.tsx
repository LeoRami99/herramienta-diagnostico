import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {NextApiRequest} from "next";
import { json } from "stream/consumers";

export async function POST(req:any, res: NextResponse) {
	
    try {
        const resultado = await req.json();
        console.log(resultado.codigo_acceso)
		const codigo_acceso = resultado.codigo_acceso;
		const prisma = new PrismaClient();
		await prisma.acceso.create({
			data: {
				codigo_acceso: codigo_acceso,
			},
		});

		//   await prisma.$disconnect();
		return NextResponse.json("Se ha creado el codigo de acceso");


	} catch (error) {
		//   console.error(error);
		return NextResponse.json("Error al crear el codigo de acceso");
		// return NextResponse.error(error);
	}
}
