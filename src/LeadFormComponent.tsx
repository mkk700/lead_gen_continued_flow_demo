import useFetch from './hooks/useFetch';

const lead_id = 817930642516421;
const access_token = 'EAAEQUasLgS4BAMb8IerAu4pRjAjvZAxZAKQTf84HVjztwVJG9iguy1iCQRTe2ZCBvG9tPvRnoTwmgeX26zew4E0hrJRYA7cjQdTK9kZBLiT8KrrKZColMDEnKZCHrtTYruDivLuOOjIRZALBQ7ApbtuboJPNnbPVgFZB0tRPas8Q8dv9mf9UsCsONFppHRvvckyulX97Ev0TrPKqB02BXRJU';
const url = `https://graph.facebook.com/v16.0/${lead_id}?access_token=${access_token}`

const options = {
  method: 'GET',
}

interface LeadsData {
  id: number,
  created_time: number,
  field_data: Array<Field>
}

interface Field {
  name: string;
  values: Array<String>;
}

function LeadFormComponent() {
  const { data, error } = useFetch<LeadsData>(url, options)
  console.log("data: ", data);
  if (data) {
    data.field_data.map((field: Field) => {
      console.log(`name: ${field.name} value: ${field.values[0]}`);
    })
  }

  return (
    <div className="App">
      <p>
        fetched lead
      </p>
    </div>
  );
}

export default LeadFormComponent;
