import { Sidebar } from "@/components/sidebar";
import { ReactNode } from "react";

export default function ProductsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-neutral-50 to-neutral-100 p-8 ">
            <div className="flex items-start gap-8 mt-8 max-w-[1440px] mx-auto sm:mt-10">
                <Sidebar/>
                <div className="space-y-6 flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
}