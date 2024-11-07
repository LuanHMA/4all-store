import { Product } from "@/@types/product"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { ArrowLeft, Star } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { ProductDetails } from "./product-details"
import Link from "next/link"
import { DeleteProduct } from "./delete"
import { EditProduct } from "./edit"

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params

    const product = await fetchWrapper(`products/${id}`) as Product
    const productPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

    return (
        <div className="space-y-6">
            <Link href={'/products'} className="flex items-center gap-2">
                <span className="p-1 rounded-2xl bg-neutral-100 border">
                    <ArrowLeft size={18} />
                </span>
                <span className="text-sm font-medium">Lista de produtos</span>
            </Link>

            <h1 className="text-2xl font-semibold">Detalhes do Produto</h1>

            <div className="flex items-start flex-wrap gap-5">
                <div className="bg-neutral-200/30 rounded-2xl flex items-center justify-center col-span-1 w-full min-h-[300px] sm:w-max">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>

                <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-end gap-2">
                        <EditProduct id={product.id} title={product.title}/>
                        <DeleteProduct id={product.id}/>
                    </div>
                    <h2 className="text-base font-semibold sm:text-xl">{product.title}</h2>
                    <span className="text-base font-medium text-red-700 sm:text-xl">{productPrice}</span>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star key={index} size={20} weight={index < product.rating ? 'fill' : 'regular'} className="text-yellow-500" />
                        ))}
                    </div>
                    <p className="text-neutral-600 text-sm space-x-2">{product.description}</p>

                    <ul className="space-y-2">
                        <li className="text-sm space-x-2">
                            <span className="font-medium">Marca:</span>
                            <span>{product.brand || "N/A"}</span>
                        </li>

                        <li className="text-sm space-x-2">
                            <span className="font-medium">Estoque disponível:</span>
                            <span>{product.stock}</span>
                        </li>

                        <li className="text-sm space-x-2">
                            <span className="font-medium">Categoria:</span>
                            <span>{product.category}</span>
                        </li>

                        <li className="text-sm space-x-2">
                            <span className="font-medium">Tags:</span>
                            {product.tags.map((tag, index) => (
                                <span key={index}>
                                    {tag}
                                    {index < product.tags.length - 1 ? "," : ""}
                                </span>
                            ))}
                        </li>

                    </ul>
                </div>
            </div>

            <ProductDetails product={product} />
        </div>
    )
}