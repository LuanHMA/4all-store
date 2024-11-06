import { ProductList } from "@/components/product/product-list"
import { fetchWrapper } from "@/utils/fetch-wrapper"

interface CategoryPageProps{
    params: {
        slug: string
    }
}

export default async function CategoriePage({ params: { slug } }: CategoryPageProps){
    const products = await fetchWrapper(`products/category/${slug}`)


    return(
        <div>
            <ProductList products={products}/>
        </div>
    )
}