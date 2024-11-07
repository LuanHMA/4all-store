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
import { PencilSimple } from "@phosphor-icons/react"
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

interface EditProductProps {
    id: number,
    title: string
}

export function EditProduct({ id, title }: EditProductProps) {
    const [open, setIsOpen] = useState(false)
    const { toast } = useToast()


    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title
        }
    })

    const handleUpdateProduct = async (data: FormSchema) => {
        try {
            const response = await fetchWrapper(`products/${id}`, "PUT", {
                title: data.title
            })

            if (response.id) {
                toast({
                    title: 'Sucesso',
                    description: 'O produto foi editado com sucesso',
                    variant: 'default'
                })
                setIsOpen(false)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="default" size={"icon"} aria-label="Deletar produto">
                    <PencilSimple size={20} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(handleUpdateProduct)} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Editar produto</DialogTitle>
                    </DialogHeader>

                    <fieldset>
                        <label htmlFor="title" className="text-sm font-medium">Título</label>
                        <Input type="text" {...register("title")} id="title" placeholder="Digite o título do produto"/>
                        {errors.title && <p className="text-sm text-red-500 mt-2 ml-2">{errors.title.message}</p>}
                    </fieldset>

                    <DialogFooter>
                        <DialogClose>
                            <Button variant={"outline"}>Cancelar</Button>
                        </DialogClose>

                        <Button variant={"default"}  disabled={isSubmitting} type="submit">
                            {isSubmitting ? 'Salvando...' : 'Salvar'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
