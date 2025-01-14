import React, { useEffect, useRef, useState } from 'react'
import { useProductGetQuery } from '../../../query/useQuery';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { useNavigate } from 'react-router-dom';
import { ProductDelete } from './ProductModal';

ModuleRegistry.registerModules([CsvExportModule]);
const AdminProducts = () => {
    const { data, refetch } = useProductGetQuery();
    const gridRef = useRef(null);
    const [filteredData, setfilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [dateFilter, setDateFilter] = useState({
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        if (data) {
            setOriginalData(data?.data?.data);
            setfilteredData(data?.data?.data);
        }
    }, [data]);

    const navigate = useNavigate()

    const applyDateFilter = () => {
        if (!dateFilter.startDate && !dateFilter.endDate) {
            setfilteredData(originalData);
            return;
        }

        const filtered = originalData.filter(item => {
            const itemDate = new Date(item.date);
            const start = dateFilter.startDate ? new Date(dateFilter.startDate) : null;
            const end = dateFilter.endDate ? new Date(dateFilter.endDate) : null;

            if (start && end) {
                return itemDate >= start && itemDate <= end;
            }
            if (start) {
                return itemDate >= start;
            }
            if (end) {
                return itemDate <= end;
            }
            return true;
        });

        setfilteredData?.(filtered);
    };

    const onBtnExport = () => {
        gridRef.current.api.exportDataAsCsv();
    };

    const handleEditClick = (product) => {
        navigate(`/admin/edit-product/${product._id}`)
    };

    const handleDeleteClick = (product) => {
        // console.log(blog)
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


    const defaultColDef = {
        resizable: true,
        flex: 1
    };
    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <h1 className=" font-medium text-center text-heading md:text-[1.75rem] text-[1.5rem]">
                Create Product
            </h1>
            <div className="mb-4 mt-4 flex space-x-4 items-center">
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">Start Date:</label>
                    <input
                        type="date"
                        value={dateFilter.startDate}
                        onChange={(e) => setDateFilter(prev => ({ ...prev, startDate: e.target.value }))}
                        className="border rounded px-2 py-1"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">End Date:</label>
                    <input
                        type="date"
                        value={dateFilter.endDate}
                        onChange={(e) => setDateFilter(prev => ({ ...prev, endDate: e.target.value }))}
                        className="border rounded px-2 py-1"
                    />
                </div>
                <button
                    onClick={applyDateFilter}
                    className=" text-sm text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                    style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                >
                    Apply Filter
                </button>
            </div>

            <button
                className=" mb-3 text-sm font-medium text-white px-4 py-2 rounded me-3 hover:bg-blue-600 transition"
                style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                onClick={onBtnExport}
            >
                Download CSV
            </button>
            <button
                className=" mb-3 text-sm font-medium text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                onClick={() => navigate('/admin/add-product')}
            >
                Create Product
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
            <ProductDelete openModal={deleteModal} setOpenModal={setDeleteModal} refetch={refetch} selectedProduct={selectedProduct} />
        </div>
    )
}

export default AdminProducts