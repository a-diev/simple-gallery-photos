import { GetAllImages } from "@/lib/services/features/images/GetAllImages";
import ItemGallery, { TItemGallery } from "./components/ItemGallery";
import ItemDetailDrawer from "./components/ItemDetailDrawer";

export default function Page() {
    const { isLoading: isLoadingImages, data: dataImages } = GetAllImages()
    if (isLoadingImages) return <h1>Loading...</h1>

    return (
        <section>
            <section className="bg-white fixed left-0 right-0 px-4 py-3">
                <h1 className="text-2xl ">
                    <strong>Gallery Photos</strong>
                </h1>
            </section>
            <section className="px-4 pt-[86px] pb-56">
                <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 ">
                    {dataImages?.map((i: TItemGallery) => (
                        <ItemDetailDrawer data={i}>
                            <ItemGallery data={i} />
                        </ItemDetailDrawer>
                    ))}
                </section>
            </section>
        </section>
    );
}
