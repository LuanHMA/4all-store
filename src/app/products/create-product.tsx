'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { fetchWrapper } from "@/utils/fetch-wrapper"
import { Plus } from "@phosphor-icons/react"
import { useState } from "react"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
    title: z.string({
        required_error: "O título é obrigatório.",
        invalid_type_error: "O título deve ser uma string."
    }).min(1, "*O título é obrigatório."),
})

type FormSchema = z.infer<typeof formSchema>

export function CreateProduct() {
    const [open, setIsOpen] = useState(false)
    const { toast } = useToast()


    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    const handleCreateProduct = async (data: FormSchema) => {
        try {
            const response = await fetchWrapper(`products/add`, "POST", {
                title: data.title
            })

            if (response.id) {
                toast({
                    title: 'Sucesso',
                    description: 'O produto adicionado com sucesso',
                    variant: 'default'
                })
                setIsOpen(false)
            }

            reset()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="default" size={"default"} className="flex items-center gap-2">
                    <Plus size={20} />
                    Novo Produto
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Novo produto</DialogTitle>
                    </DialogHeader>

                    <fieldset className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium">Título</label>
                        <Input type="text" {...register("title")} id="title" placeholder="Digite o título do produto"/>
                        {errors.title && <p className="text-sm text-red-500 mt-2 ml-2">{errors.title.message}</p>}
                    </fieldset>

                    <DialogFooter>
                        <DialogClose>
                            <Button variant={"outline"}>Cancelar</Button>
                        </DialogClose>

                        <Button variant={"default"}  disabled={isSubmitting} type="submit">
                            {isSubmitting ? 'Criando...' : 'Criar'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
