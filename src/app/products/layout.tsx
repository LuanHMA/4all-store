import { CategoriesList } from "@/components/category-list";
import { ReactNode } from "react";
import { CreateProduct } from "./create-product";

export default function ProductsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-neutral-50 to-neutral-100 p-8 ">
            <div className="flex items-start gap-8 max-w-[1440px] mx-auto">

                <CategoriesList />
                <div className="space-y-6 flex-1">
                    <div className="flex items-center justify-between gap-5 w-full sm:items-start">
                        <h2 className="text-2xl font-semibold sm:text-3xl">Lista de Produtos</h2>
                        <CreateProduct/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}