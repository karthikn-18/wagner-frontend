

import { useQuery } from '@tanstack/react-query';
import { getBlogsApi } from '../api/BlogsApi';
import { getTestimonialsApi } from '../api/TestimonialsApi';
import { getContactApi } from '../api/ContactApi';

export const useBlogsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Blogs'],
        queryFn: async () => {
            return getBlogsApi();
        },
        staleTime: 60 * 1000,
    })
}

export const useTestimonialsGetQuery = () => {
    return useQuery({
        queryKey: ['get-Testimonials'],
        queryFn: async () => {
            return getTestimonialsApi();
        },
        staleTime: 60 * 1000,
    })
}

export const useContactGetQuery = () => {
    return useQuery({
        queryKey: ['get-Contact'],
        queryFn: async () => {
            return getContactApi();
        },
        staleTime: 60 * 1000,
    })
}
