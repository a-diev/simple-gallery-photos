import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSortingStore } from "@/lib/zustand"

interface IPropsSorting {
    refetch: any
}

const Sorting = ({ refetch }: Readonly<IPropsSorting>) => {
    const setSorting = useSortingStore((state) => state.setSorting)
    return (
        <Select
            onValueChange={async (sorting: string) => {
                await setSorting(sorting)
                refetch()
            }}
            defaultValue="latest"
        >
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="latest">latest</SelectItem>
                <SelectItem value="oldest">oldest</SelectItem>
                <SelectItem value="popular">popular</SelectItem>
            </SelectContent>
        </Select>
    );
}

export default Sorting
