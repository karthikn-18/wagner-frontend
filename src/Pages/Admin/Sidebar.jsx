import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'



const Sidebar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [count, setCount] = useState(0)

    // const AdminlogOut = () => {
    //     console.log('logout')
    //     sessionStorage.clear()
    //     navigate('admin/login')
    // }


    return (
        <>
            <div class='flex flex-col justify-between border-e bg-white w-[250px] h-screen fixed' style={{ width: '250px' }}>
                <div class='px-6 py-6 h-screen min-w-[250px]'>
                    <span class='grid w-32 lace-content-center   text-xs text-gray-600 '>
                        {/* <img src={logo} className='' /> */}
                    </span>

                    <ul class='mt-6 space-y-1 ps-0 '>
                        <li
                            className={
                                pathname.includes('dashboard')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white '
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            onClick={() => navigate('/admin/dashboard')}
                            style={{ cursor: 'pointer' }}
                        >
                            Dashboard
                        </li>
                        <li
                            className={
                                pathname.includes('blogs')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            onClick={() => navigate('/admin/blogs')}
                            style={{ cursor: 'pointer' }}
                        >
                            Blogs
                        </li>

                        <li
                            className={
                                pathname.includes('testimonials')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            onClick={() => navigate('/admin/testimonials')}
                            style={{ cursor: 'pointer' }}
                        >
                            Testimonials
                        </li>

                        <li
                            className={
                                pathname.includes('industries')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/admin/industries')}
                        >
                            Industries
                        </li>
                        <li
                            className={
                                pathname.includes('category')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/admin/category')}
                        >
                            Category
                        </li>
                        <li
                            className={
                                pathname.includes('application')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/admin/application')}
                        >
                            Application
                        </li>
                        <li
                            className={
                                pathname.includes('products')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/admin/products')}
                        >
                            Products
                        </li>
                        <li
                            className={
                                pathname.includes('contact')
                                    ? 'block   bg-red-400 px-4 py-3 text-sm font-medium text-white'
                                    : 'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/admin/contact')}
                        >
                            Contact Us
                        </li>

                        <li
                            className={
                                'block   px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }
                            style={{ cursor: 'pointer' }}
                        // onClick={AdminlogOut}
                        >
                            <button className='btn-danger'> Logout</button>
                        </li>
                    </ul>
                </div>

                {/* <div class=" inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" class="flex items-center gap-2 bg-gray-100 p-4 hover:bg-gray-300">
        <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-10 w-10 rounded-full object-cover"
        />

        <div>
            <p class="text-xs">
            <strong class="block font-medium">Admin</strong>

            <span> Admin@example.com </span>
            </p>
        </div>
        </a>
    </div> */}
            </div>
        </>
    )
}

export default Sidebar
