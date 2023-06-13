import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { LeadsData } from '../../store/MyContext';
import useFetchLead from '../../hooks/useFetchLead';
import BasicFormV3 from '../forms/BasicFormV3';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function Version3() {
    const [queryParameters] = useSearchParams();
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const fblid = queryParameters.get("fbld_id"); //1961674867513271
    const [data] = useFetchLead(fblid ? fblid : "");

    useEffect(() => {
        setLeadData(data);
    }, [data]);

    return (
        <Container>
        <h2>Version 3 - Appointment Booking</h2>
        <Container>
            <div>
                <p>fblid: {fblid}</p>
            </div>
            <br />
            <BasicFormV3 lead={leadData} />
        </Container>
    </Container>
    );
}

export default Version3;
