

import { useQuery } from '@tanstack/react-query';
import { getBlogsApi } from '../api/BlogsApi';
import { getTestimonialsApi } from '../api/TestimonialsApi';
import { getContactApi } from '../api/ContactApi';
import { Userlogin } from '../store';

const token = Userlogin.getState().login

export const useBlogsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Blogs',token],
        queryFn: async () => {
            return getBlogsApi();
        },
        enabled: token.length > 0,
        staleTime: 60 * 1000,
    })
}

export const useTestimonialsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Testimonials',token],
        queryFn: async () => {
            return getTestimonialsApi();
        },
        enabled: token.length > 0,
        staleTime: 60 * 1000,
    })
}

export const useContactGetQuery = () => {
    return useQuery({
        queryKey: ['get-Contact',token],
        queryFn: async () => {
            return getContactApi();
        },
        enabled: token.length > 0,
        staleTime: 60 * 1000,
    })
}
