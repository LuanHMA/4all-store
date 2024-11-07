import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductReview } from "./product-review";
import { Product } from "@/@types/product";
import Image from "next/image";

interface ProductDetailsProps {
    product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <Tabs defaultValue="information" className="w-full mt-4">
            <TabsList>
                <TabsTrigger value="information">Informações</TabsTrigger>
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="information" className="w-full space-y-4 p-2">
                <div className="flex items-start gap-6 flex-wrap">
                    <div className="space-y-4">
                        <h3 className="text-base font-medium">Sobre o produto:</h3>
                        <ol className="list-disc ml-6 space-y-2">
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Peso:</span>
                                <span>{product.weight}</span>
                            </li>
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Altura:</span>
                                <span>{product.dimensions.height}</span>
                            </li>
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Largura:</span>
                                <span>{product.dimensions.width}</span>
                            </li>
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Comprimento:</span>
                                <span>{product.dimensions.depth}</span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Marca:</span>
                                <span>{product.brand}</span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Estoque disponível:</span>
                                <span>{product.stock}</span>
                            </li>
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Quantidade miníma:</span>
                                <span>{product.minimumOrderQuantity}</span>
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-base font-medium">
                            Informações adicionais:
                        </h3>
                        <ol className="space-y-2 list-disc ml-6">
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Informações de garantia:</span>
                                <span>{product.warrantyInformation}</span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Informações de envio:</span>
                                <span>{product.shippingInformation}</span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Status de disponibilidade:</span>
                                <span>{product.availabilityStatus}</span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Política de devolução:</span>
                                <span>{product.returnPolicy}</span>
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-base font-medium">
                            Detalhes:
                        </h3>
                        <ol className="space-y-2 list-disc ml-6">
                            <li className="text-sm space-x-2">
                                <span className="font-medium">Data de criação:</span>
                                <span>
                                    {new Date(product.meta.createdAt).toLocaleDateString("pt-BR")}
                                </span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Última atualização:</span>
                                <span>
                                    {new Date(product.meta.updatedAt).toLocaleDateString("pt-BR")}
                                </span>
                            </li>

                            <li className="text-sm space-x-2">
                                <span className="font-medium">Código de barras:</span>
                                <span>{product.meta.barcode}</span>
                            </li>

                        </ol>
                        <Image src={product.meta.qrCode} alt="QR Code" width={100} height={100} />
                    </div>


                </div>
            </TabsContent>

            <TabsContent value="description" className="w-full space-y-4 p-2">
                <p className="text-sm text-neutral-700">{product.description}</p>
            </TabsContent>

            <TabsContent value="reviews" className="w-full space-y-4 p-2">
                <div className="space-y-2">
                    <h2 className="text-base font-medium sm:text-lg">Opniões em destaque</h2>
                    <p className="text-xs text-neutral-600">{product.reviews.length} comentários</p>
                </div>

                <div className="flex items-center gap-4 flex-wrap 2xl:flex-nowrap">
                    {product.reviews.map((review, index) => (
                        <ProductReview
                            key={index}
                            date={review.date}
                            rating={review.rating}
                            reviewerEmail={review.reviewerEmail}
                            reviewerName={review.reviewerName}
                            comment={review.comment}
                        />
                    ))}

                </div>
            </TabsContent>
        </Tabs>
    )
}