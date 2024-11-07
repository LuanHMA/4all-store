import { Star } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent, CardFooter, CardHeader } from "../../../components/ui/card";

interface ProductReviewProps {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export function ProductReview(review: ProductReviewProps) {
    return (
        <Card className="w-full max-w-[400px] border bg-neutral-50">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star key={index} size={12} weight={index < review.rating ? 'fill' : 'regular'} className="text-yellow-500" />
                        ))}
                    </div>

                    <span className="text-xs text-neutral-600">
                        {new Date(review.date).toLocaleDateString("pt-BR")}
                    </span>
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-sm">
                    {review.comment}
                </p>
            </CardContent>

            <CardFooter>
                <div className="flex justify-between items-center w-full">
                    <span className="text-xs">
                        {review.reviewerName}
                    </span>

                    <span className="text-xs text-neutral-600">
                        {review.reviewerEmail}
                    </span>
                </div>
            </CardFooter>
        </Card>
    )
}