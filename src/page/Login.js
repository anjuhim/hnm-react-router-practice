import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate, setUser }) => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const loginUser = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setUser(form.elements.userId.value);
      setAuthenticate(true);
      navigate(`/`);
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={loginUser}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                id="userId"
                type="email"
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Email을 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                id="password"
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                Password를 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                id="check"
                type="checkbox"
                label="동의"
                feedback="동의를 해주세요"
                feedbackType="invalid"
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
