import { create } from 'zustand'

interface SortingState {
    sorting: string
    setSorting: (orderBy: string) => void
}

interface Action {
    setSorting: (firstName: SortingState['sorting']) => void
}

export const useSortingStore = create<SortingState & Action>()((set) => ({
    sorting: "latest",
    setSorting: (orderBy) => set(() => ({ sorting: orderBy })),
}))
