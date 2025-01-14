import React, { useState } from 'react';
import { useTestimonialsGetQuery } from '../../../query/useQuery';

import TestimonialModal from './TestimonialModal';
import ModalComponent from '../../../Components/ModalComponent';
import TableComponent from '../../../Components/TableComponent';
import { useDeleteTestimonials } from '../../../query/useMutation';


const GetTestimonials = () => {
    const { data, refetch } = useTestimonialsGetQuery();

    const { mutate } = useDeleteTestimonials()


    const [openModal, setOpenModal] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);



    const handleEditClick = (Testimonial) => {
        console.log(Testimonial)
        setSelectedTestimonial(Testimonial);
        setOpenModal(true)
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    const handleDeleteClick = (Testimonial) => {
        // console.log(Testimonial)
        setSelectedTestimonial(Testimonial);
        setDeleteModal(true)

    }

    const columns = [
        // { field: 'title', headerName: 'Title', sortable: true, filter: true },
        { field: 'description', headerName: 'Description', sortable: true, filter: true },
        {
            field: 'image',
            headerName: 'Image',
            cellRenderer: (params) => (
                params.value ? <img src={params.value} alt="Testimonial Image" style={{ width: 50, height: 50 }} /> : 'No Image'
            )
        },
        {
            field: 'author',
            headerName: 'author',
            sortable: true,
            filter: true
        },
        {
            field: 'designation',
            headerName: 'designation',
            sortable: true,
            filter: true
        },
        // { field: 'date', headerName: 'Date', sortable: true, filter: true },
        {
            headerName: 'Update',
            cellRenderer: (params) => (
                <button
                    onClick={() => handleEditClick(params.data)}
                    className="bg-blue-500 rounded-4 text-sm text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Edit
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
                    Delete
                </button>
            )
        },

    ];



    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <TableComponent tableTitle="Testimonials" data={data} dateFiterOption={true} exportOption={false} CreateOption={'create Testimonial'} handleCreateClick={() => setOpenModal(true)} columns={columns} />

            <ModalComponent modalName="Testimonial" openModal={deleteModal} setOpenModal={setDeleteModal} refetch={refetch} selectedValue={selectedTestimonial} mutate={mutate} />

            <TestimonialModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedTestimonial={selectedTestimonial} refetch={refetch} setSelectedTestimonial={setSelectedTestimonial} />
            {/* <TestimonialDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedTestimonial={selectedTestimonial} refetch={refetch} /> */}
        </div>
    );
};

export default GetTestimonials;
