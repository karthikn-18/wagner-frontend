import React, { useState } from 'react'
import { useProductGetQuery } from '../../../query/useQuery';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../Components/TableComponent';
import ModalComponent from '../../../Components/ModalComponent';
import { useDeleteProduct } from '../../../query/useMutation';


const AdminProducts = () => {
    const { data, refetch, revalidate } = useProductGetQuery({ page: "", search: "", categoryId: "", industriesIds: "", applicationsIds: "", admin: true });
    const { mutate } = useDeleteProduct()

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    const navigate = useNavigate()

    const handleEditClick = (product) => {
        navigate(`/admin/edit-product/${product._id}`)
    };

    const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setDeleteModal(true)

    }

    const columns = [
        { field: 'name', headerName: 'Title', sortable: true, filter: true },
        { field: 'description', headerName: 'Description', sortable: true, filter: true },
        { field: 'createdAt', headerName: 'Date', sortable: true, filter: true },
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
            <TableComponent tableTitle="Products List" data={data} columns={columns} dateFiterOption={true} exportOption={true} CreateOption={"Create Product"} handleCreateClick={() => navigate('/admin/add-product')} />
            {/* <ProductDelete openModal={deleteModal} setOpenModal={setDeleteModal} refetch={refetch} selectedProduct={selectedProduct} /> */}
            <ModalComponent modalName="Product" openModal={deleteModal} setOpenModal={setDeleteModal} refetch={refetch} selectedValue={selectedProduct} mutate={mutate} setSelectedValue={setSelectedProduct} />
        </div>
    )
}

export default AdminProducts