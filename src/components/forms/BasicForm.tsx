import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LeadsData } from '../../store/MyContext';


export interface Props {
    lead: LeadsData | null;
}


const BasicExample = (props: Props) => {
    // console.log("asdfasdfasfdasfasdf: ", props.lead?.field_data);
    const leadMap = props.lead?.field_data.reduce((map: any, obj: any) => {
        // map[obj.name] = obj.values[0];
        map.set(obj.name, obj.values[0]);
        return map;
    }, new Map());

    console.log("lead map: ", leadMap);


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full name" value={leadMap ? leadMap.get("full_name") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your full name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap ? leadMap.get("email") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap ? leadMap.get("phone_number") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap ? leadMap.get("date_of_birth") : ""} />
                <Form.Text className="text-muted">
                    We'll never share your date of birth with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={leadMap ? leadMap.get("gender") : ""} />
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