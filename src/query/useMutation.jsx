
import { useMutation } from "@tanstack/react-query"
import { addBlogsApi, deleteBlogsApi, editBlogsApi } from "../api/BlogsApi"
import toast from "react-hot-toast"
import { addTestimonialsApi, deleteTestimonialsApi, editTestimonialsApi } from "../api/TestimonialsApi"
import { sendContactApi } from "../api/ContactApi"



export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async () => {
            // //console.log(data,"mutation")
            // return UserLogin(data)
        },
        mutationKey: ['login'],
        onSuccess: (data) => {
            //console.log(data)
        },
        onError: (data) => {
            //console.log(data)
        }
    })

}

// Bloogs

export const useEditBlogs = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {

            return editBlogsApi(data, id)
        },
        mutationKey: ['Edit Blogs'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

export const useDeleteBlogs = () => {
    return useMutation({
        mutationFn: async ({ id }) => {

            return deleteBlogsApi(id)
        },
        mutationKey: ['Delete Blogs'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

export const useAddBlogs = () => {
    return useMutation({
        mutationFn: async ({ data }) => {

            return addBlogsApi(data)
        },
        mutationKey: ['Add Blogs'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

// Testimonial

export const useEditTestimonials = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {

            return editTestimonialsApi(data, id)
        },
        mutationKey: ['Edit Testimonials'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

export const useDeleteTestimonials = () => {
    return useMutation({
        mutationFn: async ({ id }) => {

            return deleteTestimonialsApi(id)
        },
        mutationKey: ['Delete Testimonials'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

export const useAddTestimonials = () => {
    return useMutation({
        mutationFn: async ({ data }) => {

            return addTestimonialsApi(data)
        },
        mutationKey: ['Add Testimonials'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}

export const useAddContact = () => {
    return useMutation({
        mutationFn: async ({ data }) => {

            return sendContactApi(data)
        },
        mutationKey: ['Add Contact'],

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.messag)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}


