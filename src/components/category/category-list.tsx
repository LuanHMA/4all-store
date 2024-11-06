'use client'

import { Category } from "@/@types/category"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { CaretDown } from "@phosphor-icons/react"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

export function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState('Todas categorias')

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetchWrapper('products/categories')
                setCategories(response as Category[])
            }
            catch (error) {
                console.log(error)
            }
        }
        getCategories()
    }, [])


    return (
        <Popover>
            <PopoverTrigger className="rounded-2xl bg-white w-[220px] border flex items-center justify-between gap-4 p-4">
                <div className="flex flex-col items-start">
                    <span className="text-xs text-neutral-500 font-medium">Categoria</span>
                    <span className="text-sm text-start">{selectedCategory}</span>
                </div>
                <span className="border rounded-full p-1">
                    <CaretDown size={14} className="text-neutral-900"/>
                </span>

            </PopoverTrigger>
            <PopoverContent className="w-56 z-50 mt-2">
                <ul className="bg-neutral-800 text-neutral-50 w-full rounded-2xl p-4 space-y-3">
                    {categories.map(category => 
                        <li key={category.slug}>
                            <Link className="w-full text-start text-sm" href={`/products/category/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </PopoverContent>
        </Popover>
    )
}