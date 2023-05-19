import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LeadDataContext, LeadsData } from '../../store/MyContext';


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
                <Form.Control type="email" placeholder="Enter email" value={leadMap ? leadMap.get("email") : ""}  />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                {['Male', 'Female'].map((radioType: any) => (
                    <div key={`default-${radioType}`} className="mb-3">
                        <Form.Check
                            type='radio'
                            id={`default-${radioType}`}
                            label={`${radioType}`}
                        />
                    </div>
                ))}
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;