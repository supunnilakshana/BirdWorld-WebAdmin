import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './login.css';

const Login = () => {
  return (
    <div className='container' >
      <div className="row">
        <div className="col-6">

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>
        <div className="col-6">

        <Image src="https://img.freepik.com/free-photo/vibrant-abstract-hummingbird-flying-with-elegance-generated-by-ai_188544-19557.jpg?size=626&ext=jpg&ga=GA1.1.1550395499.1698851088&semt=ais" thumbnail />

        </div>
      </div>
      
    </div>
  )
}

export default Login
