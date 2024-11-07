import { Category } from "@/@types/category"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { CategoriesLinks } from "./links"

const getCategories = async () => {
    try {
        const response = await fetchWrapper('products/categories') as Category[]
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export async function CategoriesList(){
    const categories: Category[] = await getCategories() || []

    return(
        <aside className="hidden sm:block space-y-2  pr-10 sticky top-10">
            <h1 className="text-base font-semibold sm:text-lg">Categorias</h1>

            <CategoriesLinks categories={categories}/>
        </aside>
    )
}