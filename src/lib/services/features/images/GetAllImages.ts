import {
    useQuery,
} from '@tanstack/react-query'
import API from '@/lib/services/API'

export const GetAllImages = () => {
    return useQuery({
        queryKey: ['GET_ALL_IMAGES'],
        queryFn: async () => {
            const { data } = await API.get(
                `/photos`,
                {
                    params: {
                        client_id: '294cCKPpO-G_m51Q2b9FSB-f1_Yo17-FIkd39JHRpYs',
                    },
                }
            )
            return data
        }
    })
}
