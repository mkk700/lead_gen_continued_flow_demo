import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LeadsData } from '../../store/MyContext';

export interface Props {
    lead: LeadsData | null;
}

const BasicFormV2 = (props: Props) => {
    const leadMap = props.lead?.field_data.reduce((map: any, obj: any) => {
        map.set(obj.name, obj.values[0]);
        return map;
    }, new Map());

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
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number" placeholder="Enter Zip Code" value={leadMap && leadMap.has("zip_code") ? leadMap.get("zip_code") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your Zip Code with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicFormV2;