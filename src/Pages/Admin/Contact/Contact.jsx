import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { useContactGetQuery } from '../../../query/useQuery';


ModuleRegistry.registerModules([CsvExportModule]);


const GetContact = () => {
    const { data } = useContactGetQuery();
    console.log(data)
    const gridRef = useRef(null);
    const [filteredData, setfilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [dateFilter, setDateFilter] = useState({
        startDate: '',
        endDate: ''
    });
    const [openModal, setOpenModal] = useState(false);

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


    const columns = [
        {
            field: 'firstName',
            headerName: 'First Name',
            sortable: true,
            filter: true,
            required: true
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            sortable: true,
            filter: true,
            required: true
        },
        {
            field: 'email',
            headerName: 'Email',
            sortable: true,
            filter: true,
            required: true,
            validators: {
                pattern: /\S+@\S+\.\S+/
            }
        },
        {
            field: 'number',
            headerName: 'Phone Number',
            sortable: true,
            filter: true,
            required: true,
            validators: {
                pattern: /^\d{10}$/
            }
        },
        {
            field: 'typeOfVehicle',
            headerName: 'Vehicle Type',
            sortable: true,
            filter: true,
            required: true
        },
        {
            field: 'industry',
            headerName: 'Industry',
            sortable: true,
            filter: true,
            required: true
        },
        {
            field: 'typeOfConsultant',
            headerName: 'Consultant Type',
            sortable: true,
            filter: true,
            required: true
        },
        {
            field: 'message',
            headerName: 'Message',
            sortable: true,
            filter: true,
            required: true,
            cellRenderer: (params) => (
                <div className="max-w-md truncate" title={params.value}>
                    {params.value}
                </div>
            )
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            sortable: true,
            filter: true,
            valueFormatter: (params) => {
                return new Date(params.value).toLocaleString();
            }
        }
    ];

    const defaultColDef = {
        resizable: true,
        flex: 1
    };
    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <h1 className=" font-medium text-center text-heading md:text-[1.75rem] text-[1.5rem]">
                Contact Information
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
                    className=" text-sm text-white px-4 py-1 me-3 rounded hover:bg-blue-600 transition"
                    style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                >
                    Apply Filter
                </button>
            </div>

            <button
                className=" mb-3 text-sm font-medium text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                style={{ backgroundColor: "rgb(2, 126, 240)", borderRadius: '10px' }}
                onClick={onBtnExport}
            >
                Download CSV
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


        </div>
    )
}

export default GetContact