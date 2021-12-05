import React from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import {Container,Col,Row} from 'react-bootstrap'

const SignUpPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData = new FormData(currentTarget);
        const formValues={
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        handleSubmit(formValues)
        history.push('/auctions')
    }
    return(
        <main>
                       <Container>
                       <h1>Sign Up</h1>
                       <div className="d-flex justify-content-center"> 
        <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name </Form.Label>
                    <Form.Control autofocus="autofocus" type="text" name="first_name" placeholder="first_name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control type="text" name="last_name" placeholder="last name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name="email"placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" name="password"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password Confirmation </Form.Label>
                    <Form.Control type="password" name="password_confirmation"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

        </Form>        
        </div>
        </Container>
        </main>
    )
}
export default SignUpPage;