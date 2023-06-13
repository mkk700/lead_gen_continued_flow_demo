import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { LeadsData } from '../../store/MyContext';
import useFetchLead from '../../hooks/useFetchLead';
import BasicForm from '../forms/BasicForm';

function Version1() {
    const [queryParameters] = useSearchParams();
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const fblid = queryParameters.get("fbld_id"); //1961674867513271
    const [data] = useFetchLead(fblid ? fblid : "");

    useEffect(() => {
        setLeadData(data);
    }, [data]);

    return (
        <Container>
            <h2>Version 1 - Continued Flow</h2>
            <Container>
                <div>
                    <p>fblid: {fblid}</p>
                </div>
                <br />
                <BasicForm lead={leadData} />
            </Container>
        </Container>
    );
}

export default Version1;
