'use client'

import { ProductInfo } from "@/@types/product"
import { ProductList } from "@/components/product/product-list"
import { Button } from "@/components/ui/button"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { ArrowLeft, ArrowRight, Plus } from "@phosphor-icons/react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Products() {
    const [productInfo, setProductInfo] = useState<ProductInfo>({} as ProductInfo)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetchWrapper(`products?sortBy=title&limit=30&skip=${currentPage}`)
                setProductInfo(response as ProductInfo)
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [currentPage])

    const notPrev = currentPage - 30 < 0
    const notNext = currentPage + 30 > productInfo.total

    const handlePreviousProducts = () => {
        if (notPrev) return
        setCurrentPage((prev) => prev - 30)
    }
    const handleNextProducts = () => {
        if (notNext) return
        setCurrentPage((prev) => prev + 30)
    }

    return (
        <main className="space-y-6">
            <div className="flex items-center justify-between gap-5 w-full sm:items-start">
                <h2 className="text-2xl font-semibold sm:text-3xl">Lista de Produtos</h2>

                <Link href={'/products/create'}>
                    <Button
                        variant={"default"}
                        className="flex items-center gap-2"
                    >
                        <Plus size={20} />
                        Novo Produto
                    </Button>
                </Link>
            </div>
            {loading ? <h1>Loading...</h1> : (
                <ProductList products={productInfo.products} />
            )}

            <div className="flex items-center gap-6 w-full justify-center">
                <Button
                    variant={"ghost"}
                    onClick={handlePreviousProducts}
                    className={`${notPrev && "text-neutral-400"}`}
                    disabled={notPrev}
                >
                    <ArrowLeft size={20} />
                    Anterior
                </Button>
                <Button
                    variant={"ghost"}
                    onClick={handleNextProducts}
                    className={`${notNext && "text-neutral-400 "}`}
                    disabled={notNext}
                >
                    Próximo
                    <ArrowRight size={20} />
                </Button>
            </div>
        </main>
    )
}