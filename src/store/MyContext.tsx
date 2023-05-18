import * as React from 'react';
import useFetch from '../hooks/useFetch';

export interface LeadsData {
    id: number,
    created_time: number,
    field_data: Array<Field>
}

export interface Field {
    name: string;
    values: Array<String>;
}

export const LeadDataContext = React.createContext<LeadsData | null>(null);
