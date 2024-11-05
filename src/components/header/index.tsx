import Link from "next/link";
import { ShoppingBagOpen, User } from "@phosphor-icons/react/dist/ssr";

export function Header(){
    return(
        <header className="w-full h-20 flex items-center justify-center p- bg-transparent p-8">
            <div className="w-full max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link href={'/'}>
                        <h1 className="font-bold text-xl text-neutral-900">4all store</h1>
                    </Link>

                </div>

                <div className="flex items-center divide-x divide-neutral-200">
                    <Link href={'/'} className="flex items-center gap-2 pr-4 text-sm">
                        <ShoppingBagOpen className="size-5 text-neutral-900"/>
                        Carrinho
                    </Link>

                    <Link href={'/'} className="flex items-center gap-2 pl-4 text-sm">
                        Usuário
                        <span className="bg-neutral-200 rounded-full p-1">
                            <User className="size-5 text-neutral-900"/>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}