'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { TrashSimple } from "@phosphor-icons/react"
import { DialogClose } from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function DeleteProduct({ id }: { id: number }) {
    const [open, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { push } = useRouter()

    const handleDeleteProduct = async () => {
        setLoading(true)
        try{
            const response = await fetchWrapper(`products/${id}`, "DELETE")

            if(response.isDeleted){
                push('/products')
            }
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsOpen(false)
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" size={"icon"} aria-label="Deletar produto">
                    <TrashSimple size={20} />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Excluir produto</DialogTitle>
                </DialogHeader>
                <p className="text-sm">
                    Tem certeza que deseja excluir esse produto? Essa é uma ação irreversível.
                </p>

                <DialogFooter className="flex flex-row justify-end gap-4">
                    <DialogClose>
                        <Button variant={"outline"}>Cancelar</Button>
                    </DialogClose>

                    <Button variant={"destructive"} onClick={handleDeleteProduct} disabled={loading}>
                        {loading ? 'Excluindo...' : 'Excluir'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
