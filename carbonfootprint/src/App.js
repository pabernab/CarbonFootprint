import React, { useRef, useState } from "react"
import { Form, Button, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

var ReactDOM = require('react-dom');


function App() {

  const Q1Ref = useRef()
  const Q2Ref = useRef()

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    //Do the formula
    setLoading(true)
    const results = Q1Ref.current.value

    const element = <h1>Results: {results} </h1> ;
    ReactDOM.render(element, document.getElementById('Results'));

    setLoading(false)
  }


  return (

    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Carbon Footprint Calculator</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>How many vehicles does your household have?</Form.Label>
              <Form.Control type="Text" ref={Q1Ref} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Do you perform regular Vehicle maintenence on those vehicles?</Form.Label>
              <Form.Control as="select" ref ={Q2Ref} defaultValue = "Yes">
                    <option>Yes</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div id="Results" className="w-100 text-center mt-2"></div>

    </>
   
  );
}

export default App;
