import React, { useEffect, useState, useRef } from 'react';
import { useTestimonialsGetQuery } from '../../../query/useQuery';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { CsvExportModule } from "@ag-grid-community/csv-export";

import TestimonialModal from './TestimonialModal';
import { TestimonialDelete } from './TestimonialDelete';


ModuleRegistry.registerModules([CsvExportModule]);

const GetTestimonials = () => {
    const { data, refetch } = useTestimonialsGetQuery();
    console.log(data)
    const gridRef = useRef(null);
    const [filteredData, setfilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [dateFilter, setDateFilter] = useState({
        startDate: '',
        endDate: ''
    });
    const [openModal, setOpenModal] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        if (data) {
            setOriginalData(data?.data?.data);
            setfilteredData(data?.data?.data);
        }
    }, [data]);

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

    const defaultColDef = {
        resizable: true,
        flex: 1
    };

    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <h1 className=" font-medium text-center text-heading md:text-[1.75rem] text-[1.5rem]">
                Testimonials
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
                className=" mb-3 text-sm font-medium me-3 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                onClick={onBtnExport}
            >
                Download CSV
            </button>
            <button
                className=" mb-3 text-sm font-medium text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                onClick={() => { setOpenModal(true), setSelectedTestimonial(null) }}
            >
                Create Testimonial
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
                        pagination={true}
                        animateRows={true}
                        enableCellTextSelection={true}
                        paginationPageSize={10}
                        defaultColDef={defaultColDef}
                    />
                )}
            </div>

            <TestimonialModal openModal={openModal} setOpenModal={setOpenModal} onSave={handleModalClose} selectedTestimonial={selectedTestimonial} refetch={refetch} />
            <TestimonialDelete openModal={deleteModal} setOpenModal={setDeleteModal} selectedTestimonial={selectedTestimonial} refetch={refetch} />
        </div>
    );
};

export default GetTestimonials;
