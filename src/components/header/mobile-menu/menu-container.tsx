'use client'

import { Category } from "@/@types/category"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import Link from "next/link"
import { useEffect, useState } from "react"

interface MobileMenuWrapper {
  onClose: () => void
  isOpen: boolean
}

export function MobileMenuContainer({ isOpen, onClose }: MobileMenuWrapper) {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchWrapper('products/categories') as Category[]
        setCategories(response)
      }
      catch (error) {
        console.log(error)
      }
    }
    getCategories()
  }, [])


  return (
    <>
      <div
        className={`fixed inset-0 bg-transparent ${isOpen ? 'visible' : 'invisible'} z-50`}
        onClick={onClose}
      />
      <div
        className={`${isOpen ? 'right-0 w-10/12' : '-right-[40%] w-0'} ease fixed top-0 z-50 h-full border-l border-l-neutral-200 bg-neutral-50 border-neutral-100 bg-neutral-0 transition-all duration-700 md:hidden dark:border-neutral-700 dark:bg-neutral-800 sm:hidden`}
      >
        <div
          className={`flex flex-col items-start space-y-2 p-6 ${isOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}
        >
          <h2 className="font-semibold">Categorias</h2>
          <div className="h-[90vh] flex flex-col gap-2 overflow-auto w-full">
            {categories.map((category, index) => (
              <Link href={`/products/category/${category.slug}`} key={index} className="text-sm" onClick={onClose}>{category.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
