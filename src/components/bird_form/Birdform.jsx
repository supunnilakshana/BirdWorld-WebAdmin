import React from 'react'
import "./birdform.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Birdform = () => {
    return (
        <Form className = "container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of the bird</Form.Label>
        <Form.Control type="text" placeholder="NAME" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Scientific Name</Form.Label>
        <Form.Control type="text" placeholder="SCIENTIFIC NAME" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Add Images</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
       
      <Button className="btn" variant="primary">POST</Button>{' '}
      <Button className="btn" variant="primary">CANCEL</Button>{' '}
      </Form>
    )
}

export default Birdform
