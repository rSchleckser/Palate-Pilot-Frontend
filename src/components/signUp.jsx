import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post('/auth/signup', {
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorMessages = error.response.data.errors.reduce((acc, err) => {
          if (err.param === undefined) {
            acc[err.path] = err.msg;
          } else {
            acc[err.param] = err.msg;
          }
          return acc;
        }, {});

        console.log('Extracted error messages:', errorMessages);
        setErrors(errorMessages);
      } else {
        console.error('Signup error:', error);
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
            Create Your Palate Pilot Account
          </h1>

          <Col md={6} lg={4}>
            <div
              className='signup-container p-4'
              style={{
                boxShadow: '2px 2px 2px 2px black',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h2 className='text-center mb-4'>Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='username'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    name='username'
                    value={username}
                    style={{ backgroundColor: '#E9ECEF' }}
                    onChange={handleUsernameChange}
                    className={errors.username ? 'is-invalid' : ''}
                    required
                  />
                  {errors.username && (
                    <Form.Text className='text-danger'>
                      {errors.username}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId='email' className='mt-3'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    style={{ backgroundColor: '#E9ECEF' }}
                    onChange={handleEmailChange}
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
                    style={{ backgroundColor: '#E9ECEF' }}
                    onChange={handlePasswordChange}
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
                  {loading ? 'Signing up...' : 'Signup'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
