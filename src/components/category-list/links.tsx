'use client'

import { Category } from "@/@types/category"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function CategoriesLinks({ categories }: { categories: Category[] }){
    const pathname = usePathname()

    return(
        <ul className="space-y-2">
        {categories.map(category => (
            <li key={category.slug} className={`text-sm hover:font-semibold ${pathname.includes(`${category.slug}`) ? 'font-semibold text-red-700' : ''}`}>
                <Link href={`/products/category/${category.slug}`}>
                    {category.name}
                </Link>
            </li>
        )) }
    </ul>
    )
}