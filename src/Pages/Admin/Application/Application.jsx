import React, { useEffect, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { useApplicationGetQuery } from '../../../query/useQuery';
import CategoryModal from './ApplicationModal';
import ApplicationModal from './ApplicationModal';

const Application = () => {

    const { data, refetch } = useApplicationGetQuery();
    const gridRef = useRef(null);
    const [filteredData, setfilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [seletedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
        if (data) {
            setOriginalData(data?.data?.data);
            setfilteredData(data?.data?.data);
        }
    }, [data]);

    const onBtnExport = () => {
        gridRef.current.api.exportDataAsCsv();
    };

    const defaultColDef = {
        resizable: true,
        flex: 1
    };

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
            <h1 className=" font-medium text-center text-heading md:text-[1.75rem] text-[1.5rem]">
                Application
            </h1>

            <button
                className="bg-[#FF0169] mb-3 text-sm font-medium text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={onBtnExport}
            >
                Download CSV
            </button>
            <button
                className="bg-[#FF0169] mb-3 text-sm font-medium text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => { setOpenModal(true), setSelectedCategory(null) }}
            >
                Create Application
            </button>
            <div
                className="ag-theme-quartz"
                style={{ height: 500 }}
            >
                {filteredData?.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-600 text-lg">No data available</p>
                    </div>
                )}
                {filteredData?.length > 0 && (
                    <AgGridReact
                        ref={gridRef}
                        rowData={filteredData}
                        columnDefs={columns}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        enableCellTextSelection={true}
                        pagination={true}
                        paginationPageSize={10}
                    />
                )}
            </div>

            <ApplicationModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedValue={seletedCategory} refetch={refetch} />
            {/* <BlogDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedBlog={selectedBlog} refetch={refetch} /> */}
        </div>
    )
}

export default Application