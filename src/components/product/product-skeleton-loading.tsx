import { Skeleton } from "../ui/skeleton";

export function ProductSkeletonLoading(){
    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({length: 30}, (_, index) => (<Skeleton key={index} className="h-[370px] w-full max-w-60 rounded-2xl" />))}
    </div>
    )
}