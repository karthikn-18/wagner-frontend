import React, { useState } from 'react'
import { useIndustriesGetQuery } from '../../../query/useQuery';
import IndustriesModal from './IndustriesModal';
import TableComponent from '../../../Components/TableComponent';

const Industries = () => {

    const { data, refetch } = useIndustriesGetQuery();
    const [openModal, setOpenModal] = useState(false);
    const [seletedIndustry, setSelectedIndustry] = useState(null)


    const handleEditClick = (industry) => {
        console.log(industry)
        setSelectedIndustry(industry);
        setOpenModal(true)
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedIndustry(null);
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
                    Edit Industries
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
        //             Delete Industries
        //         </button>
        //     )
        // },
    ]
    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <TableComponent tableTitle="Industries" data={data} dateFiterOption={false} exportOption={false} CreateOption={'create industries'} handleCreateClick={() => setOpenModal(true)} columns={columns} />

            <IndustriesModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedIndustry={seletedIndustry} refetch={refetch} />
        </div>
    )
}

export default Industries