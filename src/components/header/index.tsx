import Link from "next/link";
import { User } from "@phosphor-icons/react/dist/ssr";
import { MobileMenuToggle } from "./mobile-menu";

export function Header() {
    return (
        <header className="w-full h-20 flex items-center justify-center bg-transparent p-8">
            <div className="w-full max-w-[1440px] flex items-center justify-between">
                <Link href={'/'}>
                    <h1 className="font-bold text-xl text-neutral-900">4all store</h1>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href={'/'} className="flex items-center gap-2 pl-4">
                        <span className="hidden text-sm sm:block">
                            Usuário
                        </span>
                        <span className="bg-neutral-50 border rounded-full p-2">
                            <User className="size-5 text-neutral-900" />
                        </span>
                    </Link>

                    <MobileMenuToggle/>
                </div>

            </div>
        </header>
    )
}