import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(authenticateAction.login(id, password));
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
                onChange={(event) => setId(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
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
