import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { ScrollArea } from "../ui/scroll-area"

const preguntas = [
    "El manómetro indica cargado (zona verde) / operativo.",
    "Libre de obstáculos.",
    "Buena Ubicación.",
    "Zona y/o extintor numerado.",
    "Pictograma de clase de fuego legible.",
    "Pictograma de clase de forma de uso legible.",
    "Etiqueta de carga legible.",
    "Indica tipo de carga de agente ignífugo.",
    "Posee colgador para pared.",
    "Posee pasador y/o precinto de seguridad sellado.",
    "Manija de acarreo y/o palanca de activación en buen estado.",
    "Manguera en buen estado.",
    "La tobera, pitón o pistola está en óptimas condiciones.",
    "Abrazadera o sujetador de manguera en buen estado.",
    "Cilindro / Botella / Cartucho impulsor en buen estado.",
    "Pintura de botella y cartucho impulsor está en buen estado.",
    "Otros."
];

export function Observations() {
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold mt-16">Observaciones</h1>
            <ScrollArea className="h-[40vh]">
                <Table>
                    {/* <TableCaption>Observaciones</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Pregunta</TableHead>
                            <TableHead className="text-right">Respuesta</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {preguntas.map((pregunta, index: number) => (
                            <TableRow key={index} className="flex w-screen items-center">
                                <div>
                                    <TableCell className="font-medium">
                                        {pregunta}
                                    </TableCell>
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter> */}
                </Table>
            </ScrollArea>
        </div>
    )
}
