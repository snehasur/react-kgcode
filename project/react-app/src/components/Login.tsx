import { useForm } from "react-hook-form";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import useApi from './../utils/hook/useApi';
import {useState,useEffect} from 'react';
interface LoginFormInputs {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { register, handleSubmit, formState: { errors },getValues } = useForm<LoginFormInputs>();
  const [sendRequest, setSendRequest] = useState<boolean>(false)
  const dispatch = useDispatch();//to call slice
  const navigate = useNavigate();
  const { isSuccess, isLoading, validationErrors, data } = useApi({
    path: "login",
    method: "POST",
    sendRequest: sendRequest,
    reqData:getValues() 
  })
  useEffect(() => {
    setSendRequest(false)
  }, [sendRequest])
  useEffect(() => {
    if (isSuccess) {
      const { token } = data;
      //dispatch(login(data))
      console.log(data);
      dispatch(login({ token,user:data.data }));
      navigate('/dashboard');    
    }
  }, [isSuccess])


  const onSubmit = () => {
    setSendRequest(true)
    // dispatch(login(data.email));
    // navigate('/');
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <h3 className="text-center">Login</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
