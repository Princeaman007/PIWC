import Link from "next/link";
import {AlignJustify} from "lucide-react";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
//import Image from 'next/image';
import Image from "next/image";


export default function Navbar() {
    return (

        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-xl font-bold">
                    <Link href="/">PIWC BRUSSELS</Link>
                </div>
                <Menubar className="border-0">
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/">Accueil</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/leglise">Vie de l église</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/enligne">En Ligne</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="text-gray-800 hover:text-orange-700 transition duration-300 ease-in-out">
                            <Link href="/contact">Contact</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>

    );

}