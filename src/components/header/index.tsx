import Link from "next/link";
import { User } from "@phosphor-icons/react/dist/ssr";

export function Header() {
    return (
        <header className="w-full h-20 flex items-center justify-center bg-transparent p-8">
            <div className="w-full max-w-[1440px] flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link href={'/'}>
                        <h1 className="font-bold text-xl text-neutral-900">4all store</h1>
                    </Link>
                </div>

                <Link href={'/'} className="flex items-center gap-2 pl-4">
                    <span className="hidden text-sm sm:block">
                        Usuário
                    </span>
                    <span className="bg-neutral-200 rounded-full p-1">
                        <User className="size-5 text-neutral-900" />
                    </span>
                </Link>
            </div>
        </header>
    )
}