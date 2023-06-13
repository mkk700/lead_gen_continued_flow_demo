import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LeadsData } from '../../store/MyContext';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export interface Props {
    lead: LeadsData | null;
}

const BasicFormV3 = (props: Props) => {
    const leadMap = props.lead?.field_data.reduce((map: any, obj: any) => {
        map.set(obj.name, obj.values[0]);
        return map;
    }, new Map());

    const [value, onChange] = useState(new Date());

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full name" value={leadMap && leadMap.has("full_name") ? leadMap.get("full_name") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your full name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap && leadMap.has("email") ? leadMap.get("email") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                {/* @ts-expect-error: ignore */}
                <DateTimePicker onChange={onChange} value={value} />
                <Form.Text className="text-muted">
                    Picke a date
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicFormV3;