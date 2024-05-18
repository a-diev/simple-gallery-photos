import * as React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { GetImagesByQuery } from "@/lib/services/features/images/GetImagesByQuery"

const FormSchema = z.object({
    query: z.string(),
})

const SearchForm = () => {
    const [query, setQuery] = React.useState<string>("")

    // const { isLoading: isLoadingQuery, data: dataQuery } = GetImagesByQuery(query)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            query: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setQuery(data.query)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Search images" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}

export default SearchForm
