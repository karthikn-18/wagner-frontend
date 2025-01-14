import React from 'react'

import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Admin = () => {
    return (
        <div className="flex h-full bg-gray-200 ">
            <Sidebar />
            <div className='flex flex-col flex-1 overflow-y-auto'>
                <main class="flex-1  bg-gray-200  "  style={{marginLeft:'250px'}}>
                    <div class="container px-6 py-8 ">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Admin