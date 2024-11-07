import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "../ui/input";

export function SearchFilter({ onSearchProduct }: { onSearchProduct: (query: string) => void }) {
    return (
        <div className="flex items-center gap-4 relative w-full sm:w-72">
            <MagnifyingGlass size={16} className="absolute left-3 text-neutral-700" />
            <Input
                onChange={(e) => onSearchProduct(e.target.value)}
                type="text"
                className="indent-5 text-sm"
                placeholder="Qual produto você procura?"
            />
        </div>
    )
}