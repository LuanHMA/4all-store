import { Product } from "@/@types/product";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Star } from "@phosphor-icons/react/dist/ssr";

export function ProductItem({ product }: { product: Product }) {
    const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

    return (
        <Link href={`/products/${product.id}`}>
            <Card className="bg-transparent border h-max group transition-all p-4 space-y-10 sm:border-none rounded-2xl hover:shadow-lg">
                <CardHeader className="flex items-center justify-center bg-neutral-200/30 rounded-2xl">
                    <Image src={product.thumbnail} alt={product.title} width={200} height={200} className="transition-all group-hover:scale-110" />
                </CardHeader>
                <CardContent className="flex items-start flex-col gap-4 h-36">
                    <CardTitle className="text-base font-semibold">{product.title}</CardTitle>
                    <div className="space-y-2">
                        <span className="text-lg text-red-700 font-semibold">
                            {price}
                        </span>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, index)=> (
                                <Star key={index} size={14} weight={index < product.rating ? 'fill' : 'regular'} className="text-yellow-500"/>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>


    )
}