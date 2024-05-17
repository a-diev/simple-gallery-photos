import * as React from 'react'

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

type TUrl = {
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}

type TLink = {
    self: string
    html: string
    download: string
    download_location: string
}

type TLinkUser = {
    self: string,
    html: string,
    photos: string,
    likes: string,
    portfolio: string,
    following: string,
    followers: string
}

type TProfileImageUser = {
    small: string,
    medium: string,
    large: string
}

type TSocialUser = {
    instagram_username: string,
    portfolio_url: string,
    twitter_username: any,
    paypal_email: any
}

type TUser = {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: any,
    portfolio_url: string,
    bio: string,
    location: string,
    links: TLinkUser,
    profile_image: TProfileImageUser,
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    total_promoted_photos: number,
    total_illustrations: number,
    total_promoted_illustrations: number,
    accepted_tos: boolean,
    for_hire: boolean,
    social: TSocialUser,
}

export type TItemGallery = {
    id: string
    slug: string
    created_at: string
    updated_at: string
    width: number
    height: number
    blur_hash: string
    description: string
    alt_description: string
    urls: TUrl,
    links: TLink,
    likes: number,
    liked_by_user: boolean,
    current_user_collections: [],
    sponsorship: any
    topic_submissions: {}
    asset_type: string,
    user: TUser,

}

interface IPropsItemDetailDrawer {
    data: TItemGallery
    children: React.ReactNode
}

const ItemDetailDrawer = ({ data, children }: Readonly<IPropsItemDetailDrawer>) => {
    return (
        <Drawer>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent>
                <section className='pt-4 flex flex-col max-h-[400px] sm:max-h-[650px] lg:max-h-[650px] xl:max-h-[650px] overflow-y-auto'>
                    <section className='flex items-center justify-center'>
                        <div>
                            <img
                                className='h-auto max-w-full sm:max-w-[350px] lg:max-w-[350px] xl:max-w-[350px] object-cover object-center'
                                src={data.urls.full}
                                alt={`image-${data.user.name}`}
                            />
                        </div>
                    </section>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                </section>
            </DrawerContent>
        </Drawer>
    );
}

export default ItemDetailDrawer
