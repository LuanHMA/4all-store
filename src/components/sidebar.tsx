import { Category } from "@/@types/category"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import Link from "next/link"

const getCategories = async () => {
    try {
        const response = await fetchWrapper('products/categories') as Category[]
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export async function Sidebar(){

    const categories: Category[] = await getCategories() || []

    return(
        <aside className="space-y-2  pr-10 sticky top-10">
            <h1 className="text-base font-semibold sm:text-lg">Categorias</h1>

            <ul className="space-y-2">
                {categories.map(category => (
                    <li key={category.slug} className="text-base hover:font-semibold">
                        <Link href={`/products/category/${category.slug}`}>
                            {category.name}
                        </Link>
                    </li>
                )) }
            </ul>
        </aside>
    )
}