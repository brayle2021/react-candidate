import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);

    // Function to all Candidates
    const getAllCandidates = async () => {

        // Endpoint
        const candidatesEndpoint = `https://staging-api.recruitd.co.uk/v2/talent_network/15097/list`
        const body = { "filters": { "slice": [0, 10], "team_member_id": 471 } }
        const headers = {'Content-Type': 'application/json'}

        try {
            const response = await axios.post(candidatesEndpoint, body, { headers: headers });
            setCandidates(response.data)
            console.log(candidates)
            console.log(response.data)
        } catch(error){
            console.log(error);
        }
    }

    useEffect( () => {
        getAllCandidates();
    }, []);

    return (
        <>
        </>
    );
}


