import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";


export function SearchBar() { 
    return(
        <div className="h-max w-[280px] flex items-center gap-2 relative mr-2 bg-neutral-50 border border-neutral-200 pr-4 rounded-2xl">
            <input
                type="text"
                className="w-full h-10 py-2 px-4 text-neutral-900 text-sm rounded-l-2xl flex-1 bg-neutral-50 transition-all outline-none"
                placeholder="Que produto você procura?"
            />
            
            <button className="text-neutral-500 hover:text-neutral-900">
                <MagnifyingGlass className="size-6"/>
            </button>
        </div>
    )
 }