import React, { useEffect, useState, useRef } from 'react';
import { useBlogsGetQuery } from '../../../query/useQuery';
import BlogModal from './BlogModal';
import TableComponent from '../../../Components/TableComponent';
import ModalComponent from '../../../Components/ModalComponent';
import { useDeleteBlogs } from '../../../query/useMutation';


const GetBlogs = () => {
    const { data, refetch } = useBlogsGetQuery();
    console.log(data)
    const { mutate } = useDeleteBlogs()

    const [openModal, setOpenModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);



    const handleEditClick = (blog) => {
        console.log(blog)
        setSelectedBlog(blog);
        setOpenModal(true)
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    const handleDeleteClick = (blog) => {
        // console.log(blog)
        setSelectedBlog(blog);
        setDeleteModal(true)

    }

    const columns = [
        { field: 'title', headerName: 'Title', sortable: true, filter: true },
        {
            field: 'description', headerName: 'Description',
            cellRenderer: (params) => (
                params.value ? <div className="max-w-md truncate" title={params.value}>{params.value[0]}</div> : 'No Description'
            ),
            sortable: true, filter: true
        },
        {
            field: 'image',
            headerName: 'Image',
            cellRenderer: (params) => (
                params.value ? <img src={params.value} alt="Blog Image" style={{ width: 50, height: 50 }} /> : 'No Image'
            )
        },

        { field: 'date', headerName: 'Date', sortable: true, filter: true },
        {
            headerName: 'Update',
            cellRenderer: (params) => (
                <button
                    onClick={() => handleEditClick(params.data)}
                    className="bg-blue-500 rounded-4 text-sm text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Edit Blog
                </button>
            )
        },
        {
            headerName: 'Delete',
            cellRenderer: (params) => (
                <button
                    onClick={() => handleDeleteClick(params.data)}
                    className="bg-red-500 rounded-4 text-sm text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Delete Blog
                </button>
            )
        },

    ];

    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <TableComponent tableTitle="Blogs" data={data} dateFiterOption={true} exportOption={false} CreateOption={'create blog'} handleCreateClick={() => setOpenModal(true)} columns={columns} />

            <BlogModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedBlog={selectedBlog} refetch={refetch} setSelectedBlog={setSelectedBlog} />

            <ModalComponent modalName="Blog" openModal={deleteModal} setOpenModal={setDeleteModal} refetch={refetch} selectedValue={selectedBlog} mutate={mutate} setSelectedValue={setSelectedBlog} />
            {/* <BlogDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedBlog={selectedBlog} refetch={refetch} /> */}
        </div>
    );
};

export default GetBlogs;
