import { useEffect, useState } from 'react'
import { LeadsData } from '../store/MyContext';
import useFetch from './useFetch';

interface State<T> {
    data?: T
    error?: Error
}

const access_token = 'EAAGJ1PZAujwsBALb8ooDRHwO4aeYXzTbdusHOSClvxkBXZCoaD5NoOGnxOv6ufhg0ZC6QMf6yQZBIui2VGCbsqgU17uOm8T35PyCC6kCk9tm8b4zvp9Xvm1DwSDbX9wyoA1j3HP8Mac10U56iWzs2o2F2kkjayZAbZBMvUCtVKNR7kVwaq1xMRTkqsdKRmb4N0W3VN4L7ZAvRIJFczFUo1EwfPOrjzFI9WGF3THBLwNxCLj3fme7LGl';
const options = {
    method: 'GET',
}

const useFetchLead = (lead_id: string) => {
    const url = `https://graph.facebook.com/v16.0/${lead_id}?access_token=${access_token}`
    const [leadData, setLeadData] = useState<LeadsData | null>(null);
    const { data, error } = useFetch<LeadsData>(url, options)

    useEffect(() => {
        if (data) {
            setLeadData(data);
        } else {
            setLeadData(null);
        }
    });

    return [leadData];
}

export default useFetchLead;
