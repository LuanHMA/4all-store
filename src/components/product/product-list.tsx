'use client'

import { Product } from "@/@types/product"
import { ProductItem } from "./product-item"
import { useEffect, useState } from "react"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { SearchFilter } from "./search-filter"
import { OrderFilter } from "./order-filter"

export function ProductList({ products }: { products: Product[] }) {
    const [filteredProducts, setFilteredProducts] = useState(products)

   useEffect(()=> {
        setFilteredProducts(products)
   },[products])

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
                <SearchFilter onSearchProduct={handleSearchProduct}/>
                <OrderFilter onProductsOrder={handleProductsOrder}/>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.length > 0 ? 
                    filteredProducts.map((product) => <ProductItem product={product} key={product.id} />
                ): (
                    <p className="text-base font-medium">Nenhum produto encontrado!</p>
                )}
            </div>
        </div>
    )
}