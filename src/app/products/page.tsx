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
        <div className="w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-8">
            <main className="w-full max-w-7xl mx-auto mt-10 space-y-6 sm:mt-12">
                <div className="flex items-start justify-between w-full">
                    <h2 className="text-2xl font-semibold sm:text-3xl">Lista de Produtos</h2>

                    <Link href={'/products/create'}>
                        <Button 
                            variant={"default"} 
                            className="flex items-center gap-2"
                        >
                            <Plus size={20}/>
                            Novo Produto
                        </Button>
                    </Link>
                </div>
                <section className="space-y-6">
                    {loading ? <h1>Loading...</h1> : (
                        <ProductList products={productInfo.products} />
                    )}
                </section>

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
        </div>
    )
}