

import { useQuery } from '@tanstack/react-query';
import { getBlogsApi, getBlogsByIdApi } from '../api/BlogsApi';
import { getTestimonialsApi } from '../api/TestimonialsApi';
import { getContactApi } from '../api/ContactApi';
import { useUserStore } from '../store';
import { getApplicationApi } from '../api/ApplicationApi';
import { getIndustryApi } from '../api/IndustriesApi';
import { getBestSellersApi, getProductApi, getSingleProductApi } from '../api/ProductApi';
import { getCategoryApi } from '../api/CategoryApi';

const token = useUserStore.getState()?.login
console.log(token, "token");

export const useBlogsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Blogs', token],
        queryFn: async () => {
            return getBlogsApi(token);
        },
        staleTime: 60 * 1000,
    })
}

export const useBlogsByIdGetQuery = (id) => {
    return useQuery({
        queryKey: ['get-Blogs', id],
        queryFn: async () => {
            return getBlogsByIdApi(id);
        },
        staleTime: 60 * 1000,
    })
}

export const useTestimonialsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Testimonials', token],
        queryFn: async () => {
            return getTestimonialsApi();
        },
        staleTime: 60 * 1000,
    })
}

export const useContactGetQuery = () => {
    return useQuery({
        queryKey: ['get-Contact', token],
        queryFn: async () => {
            return getContactApi(token);
        },
        enabled: token?.length > 0,
        staleTime: 60 * 1000,
    })
}


export const useApplicationGetQuery = () => {
    return useQuery({
        queryKey: ['get-Application', token],
        queryFn: async () => {
            return getApplicationApi(token);
        },
        staleTime: 60 * 1000,
    })
}

export const useIndustriesGetQuery = () => {
    return useQuery({
        queryKey: ['get-Industries', token],
        queryFn: async () => {
            return getIndustryApi(token);
        },
        staleTime: 60 * 1000,
    })
}

export const useCategoryGetQuery = () => {
    return useQuery({
        queryKey: ['get-Category', token],
        queryFn: async () => {
            return getCategoryApi(token);
        },
        staleTime: 60 * 1000,
    })
}

export const useProductGetQuery = ({ page, search, categoryId, industriesIds, applicationsIds, admin }) => {
    return useQuery({
        queryKey: ['get-Product', token, page, search, categoryId, industriesIds, applicationsIds, admin],
        queryFn: async () => {

            return getProductApi(page, search, categoryId, industriesIds, applicationsIds, admin);
        },
        // staleTime: 60 * 1000,
    })
}

export const useProductGetSingleIdQuery = (id) => {
    return useQuery({
        queryKey: ['get-Product-id', id],
        queryFn: async () => {
            return getSingleProductApi(id);
        },
        // staleTime: 60 * 1000,
    })
}

export const useBestSellersGetQuery = (data) => {
    return useQuery({
        queryKey: ['get-BestSellers'],
        queryFn: async () => {
            return getBestSellersApi();
        },
        staleTime: 60 * 1000,
    })
}
