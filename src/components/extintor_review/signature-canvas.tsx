import * as React from 'react';
import { useRef, useState } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

interface Props {
    onSignatureSubmit: (signature: string) => void;
}

export function SignatureCanvas({ onSignatureSubmit }: Props) {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [signatureData, setSignatureData] = useState<string | null>(null);

    const handleClear = () => {
        canvasRef.current?.clearCanvas();
    };

    const handleUndo = () => {
        canvasRef.current?.undo();
    };

    const handleRedo = () => {
        canvasRef.current?.redo();
    };

    const handleSave = async () => {
        const data = await canvasRef.current?.exportImage("png");
        if (data) {
            setSignatureData(data);
            onSignatureSubmit(data);
        }
    };

    return (
        <div className='flex gap-4 items-center'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Firmar</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Firmar</DialogTitle>
                        <DialogDescription>
                            Firme aquí para la validación.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <ReactSketchCanvas
                                style={styles}
                                width="300"
                                height="100"
                                strokeWidth={4}
                                strokeColor="red"
                                ref={canvasRef}
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <Button type="button" variant="secondary" onClick={() => handleSave()}>
                            Guardar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {signatureData && (
                <div>
                    <h3>Firma Guardada:</h3>
                    <img src={signatureData} alt="Firma" width={100} height={50} />
                </div>
            )}
        </div>
    );
}
