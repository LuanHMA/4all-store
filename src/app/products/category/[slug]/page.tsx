import { ProductList } from "@/components/product/product-list"
import { fetchWrapper } from "@/utils/fetch-wrapper"

interface CategoryPageProps {
    params: Promise<{ slug: string }>

}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params
    const productInfo = await fetchWrapper(`products/category/${slug}`)

    return (
        <ProductList products={productInfo.products} />
    )
}