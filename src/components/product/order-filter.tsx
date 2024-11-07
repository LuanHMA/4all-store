import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export function OrderFilter({ onProductsOrder }: { onProductsOrder: (order: string) => void }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm">
                Ordem:
            </span>
            <Select onValueChange={onProductsOrder}>
                <SelectTrigger className="w-max">
                    <SelectValue placeholder="Crescente" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="asc">Crescente</SelectItem>
                    <SelectItem value="desc">Decrescente</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}