import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post('/auth/login', { email, password });
      // Store token in local storage or context (adjust based on your needs)
      localStorage.setItem('token', response.data.token);
      // Redirect to another page upon successful login
      navigate('/'); // Adjust to your desired route
    } catch (error) {
      if (error.response && error.response.data.errors) {
        // Handle validation errors from the server
        const errorMessages = error.response.data.errors.reduce((acc, err) => {
          acc[err.param] = err.msg;
          return acc;
        }, {});
        setErrors(errorMessages);
      } else {
        // Handle general errors
        console.error('Login error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && (
            <div className='invalid-feedback'>{errors.email}</div>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            required
          />
          {errors.password && (
            <div className='invalid-feedback'>{errors.password}</div>
          )}
        </div>
        <button type='submit' className='btn btn-primary' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
