import React, {  useState } from 'react'

import { useCategoryGetQuery } from '../../../query/useQuery';
import CategoryModal from './CategoryModal';
import TableComponent from '../../../Components/TableComponent';

const Category = () => {

    const { data, refetch } = useCategoryGetQuery()
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
                    Edit Category
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
            <TableComponent tableTitle="Industries" data={data} dateFiterOption={false} exportOption={false} CreateOption={'create Category'} handleCreateClick={() => setOpenModal(true)} columns={columns} />

            <CategoryModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedValue={seletedCategory} refetch={refetch} />
            {/* <BlogDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedBlog={selectedBlog} refetch={refetch} /> */}
        </div>
    )
}

export default Category