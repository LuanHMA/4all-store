'use client'

import { Product } from "@/@types/product"
import { ProductItem } from "./product-item"
import { useEffect, useState } from "react"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { MagnifyingGlass } from "@phosphor-icons/react"

export function ProductList({ products }: { products: Product[] }) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [query, setQuery] = useState('')

    const handleSearchProduct = async () => {
        const productInfo = await fetchWrapper(`products/search?q=${query}`)

        if (productInfo) {
            setFilteredProducts(productInfo.products)
        }
    }

    useEffect(() => {
        handleSearchProduct()
    }, [query])

    
    const handleProductsOrder = async (order: string) => {
        const productInfo = await fetchWrapper(`products?sortBy=title&order=${order}`)

        if(productInfo){
            setFilteredProducts(productInfo.products)
        }
    }


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 relative">
                    <MagnifyingGlass size={16} className="absolute left-3 text-neutral-700"/>
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        className="w-72 indent-5"
                        placeholder="Qual produto você procura?"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm">
                    Ordem:
                    </span>
                    <Select onValueChange={handleProductsOrder}>
                        <SelectTrigger className="w-max">
                            <SelectValue placeholder="Ordernar por" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asc">Crescente</SelectItem>
                            <SelectItem value="desc">Decrescente</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => <ProductItem product={product} key={product.id} />)}
            </div>
        </div>
    )
}