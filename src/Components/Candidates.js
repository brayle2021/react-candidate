import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import Avatar, { ConfigProvider } from 'react-avatar';
import axios from 'axios';
import { Table } from './styles/table/index.js';
import DataTable from 'react-data-table-component';

export default function Candidate() {
    const [data, setData] = useState([]);

const columns = [
    {
        name: 'Name',
        selector: row => [ <Avatar name={row.name} size="30" round={true}/>, "  " + row.name ],
        sortable: true,
    },
    {
        name: 'Rating',
        selector: row => <ReactStars count={5} size={18} activeColor="#dba07b"/>,
        sortable: true,
    },
    {
        name: 'Location',
        selector: row => row.location,
        sortable: true,
    },
    {
        name: 'Contact',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Availability',
        selector: row => row.status,
        sortable: true,
    },
];


const customStyles = {
    table: {
        style: {
            minHeight: '72px', // override the row height
            minWidth: '72px', // override the row height
        },
    },
    rows: {
        style: {
            minHeight: '72px', // override the row height
            minWidth: '72px', // override the row height
        },
    },
};

    // Function to all Candidates
    const getCandidateList = async () => {

        // Endpoint
        const url = `https://staging-api.recruitd.co.uk/v2/talent_network/15097/list`
        const data = { "filters": { "slice": [0, 10], "team_member_id": 471 } }
        const headers = {
            'Accept': '*/*',
            'Content-Type': 'application/json'}

        try {
            const response = await axios.post(url, data, { headers: headers });
            console.log("Response");
            console.log(response.data.results);
            setData(response.data.results);
            console.log("Candidates");
            console.log(data);
        } catch(error){
            console.log(error);
        }
    };

    useEffect( () => {
        getCandidateList();
    }, []);

    return (
        <>
        <DataTable
            columns={columns}
            data={data}
            selectableRows
            customStyles={customStyles}
        />

            <div>
                <Table>
                  <Table.Head>
                      <Table.TH>Name</Table.TH>
                      <Table.TH>Rating</Table.TH>
                      <Table.TH>Location</Table.TH>
                      <Table.TH>Contact</Table.TH>
                      <Table.TH>Availability</Table.TH>
                  </Table.Head>
                  <Table.Body>
                    <Table.TR>
                      <Table.TH>{data[0].name}</Table.TH>
                      <Table.TH>{data[0].rating}</Table.TH>
                      <Table.TH>{data[0].location}</Table.TH>
                      <Table.TH>{data[0].contact}</Table.TH>
                      <Table.TH>{data[0].availability}</Table.TH>
                    </Table.TR>
                  </Table.Body>
                </Table>
                {/*
                {candidates.map((candidate) => <p>candidate.email</p>)}
                {candidate}
                */}
            </div>
        </>
    );
}


