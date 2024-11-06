'use client'

import { Product } from "@/@types/product"
import { ProductItem } from "./product-item"
import { useState } from "react"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { MagnifyingGlass } from "@phosphor-icons/react"

export function ProductList({ products }: { products: Product[] }) {
    const [filteredProducts, setFilteredProducts] = useState(products)

    const handleSearchProduct = async (query: string) => {
        try{
            const productInfo = await fetchWrapper(`products/search?q=${query}`)
    
            if (productInfo) {
                setFilteredProducts(productInfo.products)
            }
        }catch(error){
            console.log(error)
        }
    }

    
    const handleProductsOrder = async (order: string) => {
        try{
            const productInfo = await fetchWrapper(`products?sortBy=title&order=${order}`)
    
            if(productInfo){
                setFilteredProducts(productInfo.products)
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 relative w-full sm:w-72">
                    <MagnifyingGlass size={16} className="absolute left-3 text-neutral-700"/>
                    <Input
                        onChange={(e) => handleSearchProduct(e.target.value)}
                        type="text"
                        className="indent-5 text-sm"
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
                {filteredProducts.length > 0 ? 
                    filteredProducts.map((product) => <ProductItem product={product} key={product.id} />
                ): (
                    <p className="text-base font-medium">Nenhum produto encontrado!</p>
                )}
            </div>
        </div>
    )
}