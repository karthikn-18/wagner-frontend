
import { useMutation } from "@tanstack/react-query"
import { addBlogsApi, deleteBlogsApi, editBlogsApi } from "../api/BlogsApi"
import toast from "react-hot-toast"
import { addTestimonialsApi, deleteTestimonialsApi, editTestimonialsApi } from "../api/TestimonialsApi"
import { sendContactApi } from "../api/ContactApi"
import { useUserStore } from "../store"
import { addIndustryApi, deleteIndustryApi, editIndustryApi } from "../api/IndustriesApi"
import { addApplicationApi, deleteApplicationApi, editApplicationApi } from "../api/ApplicationApi"
import { addCategoryApi, deleteCategoryApi, editCategoryApi } from "../api/CategoryApi"
import { addProductApi, deleteProductApi, editProductApi } from "../api/ProductApi"
import { useNavigate } from "react-router-dom"


const token = useUserStore.getState()?.login

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async () => {
            // //console.log(data,"mutation")
            // return useUserStore(data)
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

            return editBlogsApi(data, id, token)
        },
        mutationKey: ['Edit Blogs'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
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

            return deleteBlogsApi(id, token)
        },
        mutationKey: ['Delete Blogs'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
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

            return addBlogsApi(data, token)
        },
        mutationKey: ['Add Blogs'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data, "success")
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {

                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            console.log(data, "error")
            toast.error(data?.data?.message)
        }
    })
}

// Testimonial

export const useEditTestimonials = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {

            return editTestimonialsApi(data, id, token)
        },
        mutationKey: ['Edit Testimonials'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
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

            return deleteTestimonialsApi(id, token)
        },
        mutationKey: ['Delete Testimonials'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
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

            return addTestimonialsApi(data, token)
        },
        mutationKey: ['Add Testimonials'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
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

            return sendContactApi(data, token)
        },
        mutationKey: ['Add Contact'],


        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()

            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
            //console.log(data)
        }
    })
}


// Industry

export const useEditIndustry = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {
            return editIndustryApi(data, id, token)
        },
        mutationKey: ['Edit Industry'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useDeleteIndustry = () => {
    return useMutation({
        mutationFn: async ({ id }) => {
            return deleteIndustryApi(id, token)
        },
        mutationKey: ['Delete Industry'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useAddIndustry = () => {
    return useMutation({
        mutationFn: async ({ data }) => {
            return addIndustryApi(data, token)
        },
        mutationKey: ['Add Industry'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}


// Application

export const useEditApplication = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {
            return editApplicationApi(data, id, token)
        },
        mutationKey: ['Edit Application'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useDeleteApplication = () => {
    return useMutation({
        mutationFn: async ({ id }) => {
            return deleteApplicationApi(id, token)
        },
        mutationKey: ['Delete Application'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useAddApplication = () => {
    return useMutation({
        mutationFn: async ({ data }) => {
            return addApplicationApi(data, token)
        },
        mutationKey: ['Add Application'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}


// Category

export const useEditCategory = () => {
    return useMutation({
        mutationFn: async ({ data, id }) => {
            return editCategoryApi(data, id, token)
        },
        mutationKey: ['Edit Category'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useDeleteCategory = () => {
    return useMutation({
        mutationFn: async ({ id }) => {
            return deleteCategoryApi(id, token)
        },
        mutationKey: ['Delete Category'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useAddCategory = () => {
    return useMutation({
        mutationFn: async ({ data }) => {
            return addCategoryApi(data, token)
        },
        mutationKey: ['Add Category'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}


// Product

export const useEditProduct = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async ({ data, id }) => {
            console.log(data, id);
            return editProductApi(data, id, token)
        },
        mutationKey: ['Edit Product'],
        enabled: token.length > 0,

        onSuccess: (data) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                // handleCloseFunction()
                navigate('/admin/products');
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useDeleteProduct = () => {
    return useMutation({
        mutationFn: async ({ id }) => {
            return deleteProductApi(id, token)
        },
        mutationKey: ['Delete Product'],
        enabled: token.length > 0,

        onSuccess: (data, { handleCloseFunction }) => {
            console.log(data)
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message)
                handleCloseFunction()
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (data) => {
            toast.error(data?.data?.message)
        }
    })
}

export const useAddProduct = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async ({ data }) => {

            return addProductApi(data, token);
        },
        mutationKey: ['Add Product'],
        enabled: token?.length > 0,

        onSuccess: (data) => {
            console.log(data);
            if (data?.status === 200 || data?.status === 201) {
                toast.success(data?.data?.message);
                console.log(data, "response201");
                navigate('/admin/products');
            } else {
                toast.error(data?.data?.message)
            }
        },
        onError: (error) => {
            // Check if the error structure contains a message and display it
            const errorMessage = error?.data?.message || 'An error occurred';
            toast.error(data?.data?.message)
        },
    });
};




