"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { DatePickerDemo } from "../ui/date-picker"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { SignatureCanvas } from "./signature-canvas"
import extintor_image from "@/assets/extintores/25181X_01.jpg"
import { Combobox } from '../ui/combobox';
import { FaCamera, FaPen } from "react-icons/fa6"
import { getExtintores } from "@/db/controllers/extintor.controller"

export default function Details() {
    const [extintorImage, setExtintorImage] = useState<string | undefined>(undefined)
    const inputFile = useRef<HTMLInputElement | any>(null)

    // Change image on click
    const handleImageChange = () => {
        inputFile.current.click();
    }

    const handleImageSelected = (e: any) => {
        console.log(e)
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setExtintorImage(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        const setImage = async () => {
            // console.log(e)
            // setExtintorImage(e.target.result)

            // get aws link
            // const { data: { url } } = await axios.postForm('/api/user/save-picture', {
            //     file: file
            // });

            // // upload image to aws
            // await axios.put(url, file, {
            //     headers: {
            //         'Content-Type': file.type
            //     }
            // });

            // // get image
            // await getImage(file);

            // // set image to user in db
            // // toast for handling the promise
            // // when the promise is resolved, the toast will show the success message
            // toast.promise(
            //     axios.post('/api/user/change-picture', {
            //         email: session?.user?.email,
            //         filename: file.name
            //     }),
            //     {
            //         loading: 'Saving...',
            //         success: <b>Settings saved!</b>,
            //         error: <b>Could not save.</b>,
            //     }
            // )
        };

        setImage(); // call the function only if there is a file
        getExtintores();
    };


    const onSignatureSubmit = (signature: any | undefined) => {
        console.log(signature);
    }

    const loadType = [
        {
            value: "PQS-ABC",
            label: "PQS-ABC",
        },
        {
            value: "PURPURA-K",
            label: "PURPURA-K",
        },
        {
            value: "PQ-D",
            label: "PQ-D",
        },
        {
            value: "ACETATO POTASIO",
            label: "ACETATO POTASIO",
        },
        {
            value: "H20 PRESURIZADA",
            label: "H20 PRESURIZADA",
        },
        {
            value: "H20 DESMINERALIZADA",
            label: "H20 DESMINERALIZADA",
        },
        {
            value: "HALOTRON",
            label: "HALOTRON",
        },
        {
            value: "HFC236FA",
            label: "HFC236FA",
        },
        {
            value: "ESPUMA AFFF",
            label: "ESPUMA AFFF",
        }
    ];


    return (
        <div className="flex md:grid-cols-2 justify-between">
            {/* Empresa */}
            <div className="w-full space-y-2">
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        Empresa
                    </Label>
                    <Input />
                </div>

                {/* Obra/Servicio */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        Obra/Servicio
                    </Label>
                    <Input />
                </div>

                {/* ID Extintor */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        ID Extintor
                    </Label>
                    <Input
                        type="number"
                    />
                </div>

                {/* Nro Extintor */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        Nro Serie
                    </Label>
                    <Input />
                </div>

                {/* Carga */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        Tipo de carga
                    </Label>
                    <Combobox list={loadType} />
                </div>

                {/* Peso */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32">
                        Peso
                    </Label>
                    <Input />
                </div>

                {/* Ubicación */}
                <div className="flex gap-4 align-middle items-center">
                    <Label className="w-32 mx-auto">
                        Ubicación
                    </Label>
                    <Input />
                </div>

                {/* Fecha */}
                <div className="space-x-2 items-center w-[20rem] grid grid-cols-2">
                    <Label className="w-32">
                        Fecha de mantenimiento
                    </Label>
                    <DatePickerDemo />
                </div>

                <div className="space-x-2 items-center w-[20rem] grid grid-cols-2">
                    <Label className="w-32">
                        Fecha de vencimiento
                    </Label>
                    <DatePickerDemo />
                </div>

                <div className="space-x-2 items-center w-[20rem] grid grid-cols-2">
                    <Label className="w-32">
                        Fecha de inspección
                    </Label>
                    <DatePickerDemo />
                </div>

                <div className="space-x-2 items-center w-[20rem] grid grid-cols-2">
                    <Label className="w-32">
                        Fecha de siguiente inspección
                    </Label>
                    <DatePickerDemo />
                </div>

                {/* Responsable verificación */}
                <div className="flex space-x-2 items-center">
                    <Label className="w-32">
                        Responsable verificación
                    </Label>
                    {/* Siganture */}
                    <SignatureCanvas onSignatureSubmit={onSignatureSubmit} />
                </div>

                {/* Responsable SSOMA */}
                <div className="flex space-x-2 items-center">
                    <Label className="w-32">
                        Responsable SSOMA
                    </Label>
                    {/* Siganture */}
                    <SignatureCanvas onSignatureSubmit={onSignatureSubmit} />
                </div>
            </div>
            <div className="w-full justify-center align-middle flex ">
                <input
                    type='file'
                    accept="image/*"
                    id='file'
                    ref={inputFile}
                    style={{ display: 'none' }}
                    onInputCapture={(e) => handleImageSelected(e)} />
                <div
                    className="relative group dark:mix-blend-lightnen"
                    onClick={() => handleImageChange()}
                >
                    <FaCamera className="absolute hidden group-hover:block top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-22 w-22 object-cover" />
                    {extintorImage ? (
                        <Image
                            src={extintorImage}
                            alt="profile"
                            width={500}
                            height={500}
                            className="rounded-lg ring-2 aspect-square group-hover:hover:opacity-60 transition-opacity cursor-pointer object-cover object-right"
                        />
                    ) : (
                        <Image
                            src={"https://picsum.photos/500/500"}
                            alt="profile"
                            width={500}
                            height={500}
                            className="rounded-lg ring-2 aspect-square group-hover:hover:opacity-60 transition-opacity cursor-pointer object-cover object-right"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}