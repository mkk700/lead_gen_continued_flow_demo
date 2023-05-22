import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LeadsData } from '../../store/MyContext';


export interface Props {
    lead: LeadsData | null;
}


const BasicExample = (props: Props) => {
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap && leadMap.has("phone_number") ? leadMap.get("phone_number") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap && leadMap.has("date_of_birth") ? leadMap.get("date_of_birth") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your date of birth with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap && leadMap.has("gender") ? leadMap.get("gender") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your gender with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;