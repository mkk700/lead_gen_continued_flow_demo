import { useEffect, useState } from 'react'
import { LeadsData } from '../store/MyContext';
import useFetch from './useFetch';

const options = {
    method: 'GET',
}

const useFetchLead = (lead_id: string) => {
    const access_token = process.env.REACT_APP_ACCESS_TOKEN;
    console.log("what is access Token: ", access_token);
    const url = `https://graph.facebook.com/v16.0/${lead_id}?access_token=${access_token}`
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const { data, error } = useFetch<LeadsData>(url, options)

    useEffect(() => {
        if (data) {
            setLeadData(data);
        } else {
            setLeadData(null);
        }
        if (error) {
            console.error(error);
        }
    }, [data, error]);

    return [leadData];
}

export default useFetchLead;
