import { ProductList } from "@/components/product/list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-8">
      <main className="w-full max-w-7xl mx-auto mt-10 space-y-6 sm:mt-16">
        <section className="space-y-6">
          <header className="space-y-2 flex items-center justify-between">
            <h2 className="text-4xl font-semibold">Lista de produtos</h2>
            <Link href={'/products/create'}>
              <Button>
                <Plus size={20} />
                Novo produto
              </Button>
            </Link>
          </header>

          <Suspense fallback={<div>Carregando...</div>}>
            <ProductList />
          </Suspense>
        </section>
      </main>
    </div>
  )
}