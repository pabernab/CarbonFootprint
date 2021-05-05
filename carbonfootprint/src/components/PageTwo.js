import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Card } from "react-bootstrap";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.css";

function PageTwo() {

  //Carbon Calculator Refs
  const Q1Ref = useRef();
  const Q2Ref = useRef();

  //Home Energy Calculator Refs
  const Q3Ref  = useRef();
  const Q4Ref  = useRef();
  const Q5Ref  = useRef();
  const Q6Ref  = useRef();
  const Q7Ref  = useRef();

  const [loading, setLoading] = useState(false);

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  function yesNoConverter(val){
    if(val === "Yes")
      return 1;
    else 
       return 0;

  }

  async function handleCarbonSubmit(e) {
    e.preventDefault();

    //Do the formula
    setLoading(true);
    const results = Q1Ref.current.value * ((219 * 52) / (21.6 * 19.6 * 1.01));
    //const Q2Ref.current.value is how you get the "Yes" or "No" 
    //I made a function to convert Yes and No to 1 and 0 respectively 
    //Example call yesNoConverter(Q2Ref.current.value)

    const element = <h1>Results: You produce {results.toFixed(2)} Pounds of CO2 per year from your cars. </h1>;
    ReactDOM.render(element, document.getElementById("Results"));

    setLoading(false);
  }

  async function handleHomeEnergySubmit(e) {
    e.preventDefault();

    //Do the formula
    setLoading(true);
    //Get the user input by Q[N]Ref.current.value
    //Ex. Get input for Question 3 Q3Ref.current.value
    const natGas = (Q3Ref.current.value/10.68) * 12;
    const elec = (Q4Ref.current.value/11.9) * 119.58 * 12;
    const fuelOil = (Q5Ref.current.value/4.02) * 22.61 * 12;
    const propane = (Q6Ref.current.value/2.47) * 12.43 * 12;
    const results = natGas + elec + fuelOil + propane;

    const element = <h1>Results: Your house produces {results.toFixed(2)} Pounds of CO2 per year. </h1>;
    ReactDOM.render(element, document.getElementById("ResultsHE"));

    setLoading(false);
  }

  return (
    <Page>
      <Card>
        <Card.Body style={{ color: "black" }}>
          <h2 className="text-center mb-4">Carbon Footprint Calculator</h2>
          <Form onSubmit={handleCarbonSubmit}>
            <Form.Group id="email">
              <Form.Label>
                How many vehicles does your household have?
              </Form.Label>
              <Form.Control type="Text" ref={Q1Ref} required  placeholder ="Number of Vehicles"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                Do you perform regular Vehicle maintenence on those vehicles?
              </Form.Label>
              <Form.Control as="select" ref={Q2Ref} defaultValue="Yes">
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Calculate Carbon Footprint
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div id="Results" className="w-100 text-center mt-2"></div>


      <pre>


      </pre>

      <Card>
        <Card.Body style={{ color: "black" }}>
          <h2 className="text-center mb-4">Home Energy Usage</h2>
          <Form onSubmit={handleHomeEnergySubmit}>
            <Form.Group id="Question">
              <Form.Label>
                How much natural gas does your household use per month?
              </Form.Label>
              <Form.Control type="Text" ref={Q3Ref} required placeholder = "Input how much you pay monthly in terms of dollars" />
            </Form.Group>

            <Form.Group id="Question">
              <Form.Label>
              How much electricity does your household use per month?
              </Form.Label>
              <Form.Control type="Text" ref={Q4Ref} required placeholder = "Input how much you pay monthly for electrcity in dollars " />
            </Form.Group>

            <Form.Group id="Question">
              <Form.Label>
                What percent of your household is green powered (0 not green powered)?
              </Form.Label>
              <Form.Control type="Text" ref={Q5Ref} required defaultValue = "0"/>
            </Form.Group>
        
            <Form.Group id="Question">
              <Form.Label>
                How much fuel oil does your household use per month?
              </Form.Label>
              <Form.Control type="Text" ref={Q6Ref} required  placeholder = "Input how much you pay monthly for fuel oil in dollars"/>
            </Form.Group>

            <Form.Group id="Question">
              <Form.Label>
               How much propane does your household use per month?
              </Form.Label>
              <Form.Control type="Text" ref={Q7Ref} required placeholder = "Input how much you pay monthly for propane in dollars" />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Calculate Home Energy Usage
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div id="ResultsHE" className="w-100 text-center mt-2"></div>


    </Page>
  );
}

export default PageTwo;
