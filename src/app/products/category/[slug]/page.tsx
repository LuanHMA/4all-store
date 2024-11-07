import { ProductList } from "@/components/product/product-list"
import { fetchWrapper } from "@/utils/fetch-wrapper"

interface CategoryPageProps {
    params: {
        slug: string
    }
}

export default async function CategoryPage({ params: { slug } }: CategoryPageProps) {
    const productInfo = await fetchWrapper(`products/category/${slug}`)

    return (
        <ProductList products={productInfo.products} />
    )
}