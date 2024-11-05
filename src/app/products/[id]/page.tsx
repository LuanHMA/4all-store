import { Product } from "@/@types/product"
import { fetchWrapper } from "@/utils/fetch-wrapper"

interface ProductPageProps {
    params: {
        id: string
    }
}

export default async function ProductPage({ params: { id } }: ProductPageProps){
    const product = await fetchWrapper(`products/${id}`) as Product
    console.log(product)

    return(
        <h1>{product.title}</h1>
    )
}