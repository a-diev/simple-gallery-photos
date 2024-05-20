import {
    useQuery,
} from '@tanstack/react-query'
import API from '@/lib/services/API'

export const GetSearchImage = (query: string = "") => {
    return useQuery({
        queryKey: ['GET_SEARCH_IMAGE'],
        queryFn: async () => {
            const { data } = await API.get(
                `/search/photos`,
                {
                    params: {
                        query: query,
                        page: 1,
                        per_page: 20,
                        client_id: '294cCKPpO-G_m51Q2b9FSB-f1_Yo17-FIkd39JHRpYs',
                    },
                }
            )
            return data
        }
    })
}
