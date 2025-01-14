import React, { useEffect, useState, useRef } from 'react';

import { useContactGetQuery } from '../../../query/useQuery';
import TableComponent from '../../../Components/TableComponent';

const GetContact = () => {
    const { data } = useContactGetQuery();
    console.log(data)

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


    return (
        <div className="p-4 max-w-[1280px] md:m-auto">
            <TableComponent tableTitle="Contact Information" data={data} dateFiterOption={true} exportOption={true}  columns={columns} />
        </div>
    )
}

export default GetContact