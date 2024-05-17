import { Card } from "@/components/ui/card"

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

interface IPropsItemGallery {
    data: TItemGallery
}

const ItemGallery = ({ data }: Readonly<IPropsItemGallery>) => {
    return (
        <Card>
            <section>
                <div>
                    <img
                        className='h-auto max-w-full rounded-lg object-cover object-center'
                        src={data.urls.small}
                        alt={`image-${data.user.name}`}
                        width={data.width}
                        height={data.height}
                    />
                </div>
            </section>
        </Card>
    );
}

export default ItemGallery
