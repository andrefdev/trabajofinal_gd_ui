"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { FaFire } from "react-icons/fa"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function NavigationMenuDemo() {
    return (
        <header className="flex items-center h-12 px-2 border-b shrink-0 ">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => console.log("funca")}>Fichas de Observación</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Responsables</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            SSOMA
                        </MenubarItem>
                        <MenubarItem>
                            Verificación
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Generar Reportes</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Todos
                        </MenubarItem>
                        <MenubarItem>
                            Por fecha
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => console.log("funca")}>Clientes</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => console.log("funca")}>Escanear QR</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="flex-1 ml-auto sm:flex-initial">
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Buscar opciones..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Image src="https://ui-avatars.com/api/?name=John+Doe" width="32" height="32" className="rounded-full" alt="Avatar" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </div>
        </header>
    )
}

function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}