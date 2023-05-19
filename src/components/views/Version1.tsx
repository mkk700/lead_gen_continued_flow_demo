import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { LeadDataContext, LeadsData } from '../../store/MyContext';
import useFetchLead from '../../hooks/useFetchLead';
import BasicExample from '../forms/BasicForm';

function Version1() {
    const [queryParameters] = useSearchParams();
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const fblid = queryParameters.get("fblid"); //1961674867513271
    const [data] = useFetchLead(fblid ? fblid : "");

    useEffect(() => {
        setLeadData(data);
    });

    return (
        <Container>
            <h2>Version 1</h2>
            <Container>
                <div>
                    <p>fblid: {fblid}</p>
                </div>
                <br />
                <BasicExample lead={leadData} />
            </Container>
        </Container>
    );
}

export default Version1;
