import { Product } from "@/@types/product"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { ProductItem } from "./item"

export async function ProductList() {
    const response = await fetchWrapper('products?limit=30')
    const products = response.products as Product[]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products && products.map(product => <ProductItem product={product} key={product.id} />)}
        </div>
    )
}