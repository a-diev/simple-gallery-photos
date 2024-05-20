import * as React from "react";

import { GetAllImages } from "@/lib/services/features/images/GetAllImages";
import ItemGallery, { TItemGallery } from "./components/ItemGallery";
import ItemDetailDrawer from "./components/ItemDetailDrawer";
import Sorting from "./components/Sorting";
import { useSortingStore } from '@/lib/zustand';
import { GetSearchImage } from "@/lib/services/features/images/GetSearchImage";

export default function Page() {
    const [search, setSearch] = React.useState<string>("")
    const sorting = useSortingStore((state: any) => state.sorting)

    const {
        isLoading: isLoadingImages,
        data: dataImages,
        refetch: refetchImages
    } = GetAllImages(sorting)
    const {
        isLoading: isLoadingSearchImage,
        data: dataSearchImage,
        refetch: refetchSearchImage
    } = GetSearchImage(search)

    return (
        <section>
            <section className="border-2 h-auto bg-white fixed left-0 right-0 px-4 py-3 flex flex-col gap-4 items-start justify-start">
                <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-6xl ">
                    <strong>Gallery Photos</strong>
                </h1>
                <div className="w-full flex flex-col gap-4 items-center justify-between lg:flex-row">
                    <input
                        type="text"
                        placeholder="Search images"
                        onChange={(e: any) => {
                            setTimeout(async () => {
                                await setSearch(e.target.value)
                                refetchSearchImage()
                            }, 3000)
                        }}
                        className="w-full h-[56px] flex-1 px-4 border-2 rounded-xl"
                    />
                    <Sorting refetch={refetchImages()} />
                </div>
            </section>
            <section className="px-4 pt-[200px] pb-56">
                <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 ">
                    {isLoadingImages || isLoadingSearchImage && <h1>Loading...</h1>}
                    {!search && dataImages?.map((i: TItemGallery) => (
                        <ItemDetailDrawer data={i}>
                            <ItemGallery data={i} />
                        </ItemDetailDrawer>
                    ))}
                    {search && dataSearchImage?.results?.map((i: TItemGallery) => (
                        <ItemDetailDrawer data={i}>
                            <ItemGallery data={i} />
                        </ItemDetailDrawer>
                    ))}
                </section>
            </section>
        </section>
    );
}
