// src/components/Login.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService'; // Import the service function
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await loginUser(email, password);
      localStorage.setItem('token', res.token);
      navigate('/profile');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        const errorMessages = err.response.data.errors.reduce((acc, error) => {
          acc[error.param] = error.msg;
          return acc;
        }, {});
        setErrors(errorMessages);
      } else {
        console.error('Login error:', err.message);
        setErrors({ general: 'An error occurred. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        fluid
        className='d-flex align-items-center justify-content-center vh-100'
      >
        <Row className='justify-content-center w-100'>
          <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Log In to Your Palate Pilot Account
          </h1>

          <Col md={6} lg={4}>
            <div
              className='login-container p-4'
              style={{
                boxShadow: '2px 2px 2px 2px black',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h2 className='text-center mb-4'>Login</h2>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId='email'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    style={{ backgroundColor: '#E9ECEF' }}
                    onChange={onChange}
                    className={errors.email ? 'is-invalid' : ''}
                    required
                  />
                  {errors.email && (
                    <Form.Text className='text-danger'>
                      {errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId='password' className='mt-3'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    value={password}
                    style={{ backgroundColor: '#D3D3D3' }}
                    onChange={onChange}
                    className={errors.password ? 'is-invalid' : ''}
                    required
                  />
                  {errors.password && (
                    <Form.Text className='text-danger'>
                      {errors.password}
                    </Form.Text>
                  )}
                </Form.Group>
                <Button
                  type='submit'
                  className='btn btn-primary w-100 mt-4'
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
