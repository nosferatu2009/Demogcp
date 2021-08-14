import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function signUp() {
	return (
		<Form>
  			<Form.Group as={Row} className="justify-content-center" controlId="formHorizontalEmail">
    			<Form.Label column sm={2}>
     				Username
    			</Form.Label>
    		<Col sm={4}>
      			<Form.Control type="text" />
    		</Col>
  			</Form.Group>

  			<Form.Group as={Row} className="justify-content-center" controlId="formHorizontalPassword">
    			<Form.Label column sm={2}>
      				Major / Minor
   				</Form.Label>
    		<Col sm={4}>
     			<Form.Control type="text" />
    		</Col>
  			</Form.Group>

  			<Form.Group as={Row} className="justify-content-center" controlId="formHorizontalPassword">
    			<Form.Label column sm={2}>
      				Residential College
   				</Form.Label>
    		<Col sm={4}>
     			<Form.Control type="text"/>
    		</Col>
  			</Form.Group>

  			<Form.Group as={Row} className="justify-content-center" controlId="formHorizontalPassword">
    			<Form.Label column sm={2}>
      				Graduation Year
   				</Form.Label>
    		<Col sm={4}>
     			<Form.Control type="text" />
    		</Col>
  			</Form.Group>

  			<Form.Group as={Row} className="justify-content-center">
    			<Col sm={{ span: 10, offset: 11 }}>
      				<Button type="submit">Sign in</Button>
    			</Col>
  			</Form.Group>
  		</Form>

	);
}
export default signUp;
