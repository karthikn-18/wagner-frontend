import React, { useState } from 'react'
import { useApplicationGetQuery } from '../../../query/useQuery';

import ApplicationModal from './ApplicationModal';
import TableComponent from '../../../Components/TableComponent';

const Application = () => {

    const { data, refetch } = useApplicationGetQuery();

    const [openModal, setOpenModal] = useState(false);
    const [seletedCategory, setSelectedCategory] = useState(null)


    const handleEditClick = (industry) => {
        console.log(industry)
        setSelectedCategory(industry);
        setOpenModal(true)
    };

    const handleDeleteClick = (industry) => {
        // console.log(industry)
        setSelectedCategory(industry);
        // setDeleteModal(true)

    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1
        },
        {
            headerName: 'Update',
            cellRenderer: (params) => (
                <button
                    onClick={() => handleEditClick(params.data)}
                    className="bg-blue-500 rounded-4 text-sm text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Edit Application
                </button>
            )
        },
        // {
        //     headerName: 'Delete',
        //     cellRenderer: (params) => (
        //         <button
        //             onClick={() => handleDeleteClick(params.data)}
        //             className="bg-red-500 rounded-4 text-sm text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        //         >
        //             Delete Category
        //         </button>
        //     )
        // },
    ]
    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <TableComponent tableTitle="Application" data={data} dateFiterOption={false} exportOption={false} CreateOption={'create application'} handleCreateClick={() => setOpenModal(true)} columns={columns} />

            <ApplicationModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedValue={seletedCategory} refetch={refetch} />
            {/* <BlogDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedBlog={selectedBlog} refetch={refetch} /> */}
        </div>
    )
}

export default Application